import apple from '../src/assets/applel.svg';
import google from '../src/assets/googlel.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './Components/Layout';
import hide from '../src/assets/hide.png'
import show from '../src/assets/show.png'

const Signup = () => {
  const [dob, setDOB] = useState(null);
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async() => {
    if (!username || !email || !password || !confirmPassword || !phoneNo || !dob) {
      setErrorMessage("Fill all the required fields");
      setShowError(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setShowError(true);
      return;
    }
    try {
      const response = await fetch('api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username,phoneNo,dob,password,email }),
    });
    const data = await response.json();
    if (data.success) {
      //a message box that says logged in good
        navigate("/")
      } else {
        setErrorMessage(data.message);
        setShowError(true);
        return;
      }
  } catch (error) {
      setErrorMessage('Error logging in');
      setShowError(true);
      return;
    }
};


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  return (
    <Layout>
    <div className="flex justify-center items-center">
    <div className="relative z-10 bg-white backdrop-blur-[2px] bg-opacity-20 p-4 md:p-8 rounded-lg w-full max-w-md">
      <h1 className='text-2xl sm:text-3xl font-bold text-primary text-center'>Signup</h1>
          <div className="flex flex-col items-center gap-y-4 mt-8 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setUsername(e.target.value) }}
            />
            <div className='flex w-full justify-center gap-0'>
              <input type="text" className=' text-white p-2 w-[90%] md:w-[91%] outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-l-2xl placeholder-white focus:border focus:border-primary'
                placeholder='Date Of Birth'
                required
                value={dob === null ? "" : dob}
                onChange={(e) => setDOB(e.target.value)}
              />
              <input type="date" name="" id="" className='text-white p-2 md:w-9 w-9 outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-r-2xl placeholder-white focus:border focus:border-primary' onChange={(e) => setDOB(e.target.value)} />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setEmail(e.target.value) }}
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
                required
                onChange={(e) => { setErrorMessage(""); setShowError(false); setPassword(e.target.value) }}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                <img src={showPassword ? hide : show} alt="Toggle Password Visibility" className="w-6 h-6" />
              </button>
            </div>
            <div className="relative w-full">
              <input
                type={showPassword1 ? "text" : "password"}
                placeholder="Confirm Password"
                className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
                required
                onChange={(e) => { setErrorMessage(""); setShowError(false); setConfirmPassword(e.target.value) }}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                onClick={togglePasswordVisibility1}
              >
                <img src={showPassword1 ? hide : show} alt="Toggle Password Visibility" className="w-6 h-6" />
              </button>
            </div>
            <input
              type="tel"
              placeholder=" Phone number"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setPhoneNo(e.target.value) }}
            />
          </div>
          {showError &&
            <span className='font-bold text-red-500 justify-center flex'>
              {errorMessage}
            </span>
          }
          <div className="pt-3 flex justify-center">
            <button className="p-2 bg-primary text-white hover:bg-gray-800 hover:text-primary rounded-xl font-medium w-[60%]"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
              Create
            </button>
          </div>
          <div className="py-3 flex gap-2 items-center justify-center">
            <hr className='border-1 border-gray-400 w-[33%]' />
            <span className='font-semibold'>
              OR
            </span>
            <hr className='border-1 border-gray-400 w-[33%]' />
          </div>
          <div className='flex gap-4 justify-center'>
            <button
              className=" p-3 gap-x-2  flex text-black rounded-full hover:bg-primary">
              <img src={google} alt="" className=" w-[25px]" />
            </button>
            <button
              className=" p-3 gap-x-2  flex text-black rounded-full hover:bg-primary">
              <img src={apple} alt="" className="w-[25px]" />
            </button>
          </div>
          <div>
            <span className='flex py-2 justify-center'>
              Have an account? <button className='text-primary px-2 hover:underline'
                onClick={
                  (e) => { e.preventDefault(); navigate("/login") }}>
                Login
              </button>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;