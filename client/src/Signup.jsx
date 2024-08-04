import apple from '../src/assets/applel.svg';
import google from '../src/assets/googlel.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './Components/Layout';

const Signup = () => {
  const [dob, setDOB] = useState(null);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword || !phoneNumber || !dob) {
      setErrorMessage("Fill all the required fields");
      setShowError(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setShowError(true);
      return;
    }
  };

  return (
    <Layout>
    <div className="flex justify-center items-center">
    <div className="relative z-10 bg-white backdrop-blur-[2px] bg-opacity-20 p-8 rounded-lg w-full max-w-md">
      <div className="text-3xl font-light text-black-400 text-left flex justify-center w-full mb-3">
        <span>
          <button
            className="text-primary font-bold hover:underline"
            onClick={(e) => { e.preventDefault(); navigate("/login"); }}
          >
            Login
          </button>
          /
          <button
            className="text-primary font-bold hover:underline"
            onClick={(e) => { e.preventDefault(); navigate("/signup"); }}
          >
            Signup
          </button>
        </span>
      </div>
          <div className="flex flex-col items-center gap-y-4 mt-8 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setName(e.target.value) }}
            />
            <div className='flex w-full justify-center gap-2'>
              <input type="text" className='p-2 w-[40%] md:w-[28%] outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary'
                placeholder='Date Of Birth'
                required
                value={dob === null ? "" : dob}
                onChange={(e) => setDOB(e.target.value)}
              />
              <input type="date" name="" id="" className='p-2 md:w-9 w-10 outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary text-transparent' onChange={(e) => setDOB(e.target.value)} />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setEmail(e.target.value) }}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setPassword(e.target.value) }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setConfirmPassword(e.target.value) }}
            />
            <input
              type="tel"
              placeholder=" Phone number"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setPhoneNumber(e.target.value) }}
            />
          </div>
          {showError &&
            <span className='font-bold text-red-500 justify-center flex'>
              {errorMessage}
            </span>
          }
          <div className="pt-3 flex justify-center">
            <button className="bg-primary text-white hover:bg-gray-800 hover:text-primary rounded-xl font-medium w-[60%]"
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
              className=" p-3 gap-x-2  flex text-black border-2 rounded-full hover:border-primary">
              <img src={google} alt="" className=" w-[25px]" />
            </button>
            <button
              className=" p-3 gap-x-2  flex text-black border-2 rounded-full hover:border-primary">
              <img src={apple} alt="" className="w-[25px]" />
            </button>
          </div>
          <div>
            <span className='flex py-4 justify-center'>
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