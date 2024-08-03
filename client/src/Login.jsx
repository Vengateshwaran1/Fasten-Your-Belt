import apple from '../src/assets/applel.svg';
import google from '../src/assets/googlel.svg';
import { useNavigate } from 'react-router-dom';
import Layout from './Components/Layout';
import { useState } from 'react';



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = () => {
    if (!email || !password) {
      setErrorMessage("Fill all the required field");
      setShowError(true);
      return;
    }
    };


  return (
    <Layout>
      <div className="flex justify-center items-center p-10">
            <div className="relative z-10 bg-white backdrop-blur-[2px] bg-opacity-20 p-8 rounded-lg w-full max-w-md mx-4 sm:mx-8 md:mx-12 lg:mx-0">
              <div className="text-3xl font-light text-black-400 text-left flex justify-center w-full mb-4">
                <span>
                  <span className="text-primary font-bold">Fasten Your Belt</span>
                </span>
              </div>

              <div className="flex flex-col items-center gap-y-4 mt-8 mb-4">
            <input
              type="text"
              placeholder="Email"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setEmail(e.target.value) }}
            />
            <input
              type="text"
              placeholder="Password"
              className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              required
              onChange={(e) => { setErrorMessage(""); setShowError(false); setPassword(e.target.value) }}
            />
          </div>
          <div className='flex justify-end px-6'>
            <button className='text-primary hover:underline'>Forgot Password?</button>
          </div>
          <div className="flex justify-start gap-2 py-2">
            <input type="checkbox" />{' '}
            <span className="text-gray-300 text-md">Remember me</span>
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
              Login
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
              Dont have an account? <button className='text-primary px-2 hover:underline'
                onClick={
                  (e) => { e.preventDefault(); navigate("/signup") }}>
                Sign Up
              </button>
            </span>
          </div>
            </div>
        </div>
    </Layout>
  );
};

export default Login;