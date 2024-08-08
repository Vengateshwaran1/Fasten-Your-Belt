import { useState } from "react";
import Layout from "./Components/Layout";
import exchange from "../src/assets/exchange.png";


const Booking = () => {
  const [from, setFrom] = useState("");
  const [dob,setDOB] = useState(null);

  const [to, setTo] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleExchangeClick = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };
  const handleSubmit = async() => {
    if (!to || !from || !dob) {
      setErrorMessage("Fill all the required fields");
      setShowError(true);
    }
    else{
      try{
      const response=await fetch('/api/search',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({from,to}),
      });
      const rides=response.json();
      if(rides.success!=false){
        console.log(rides);
      }
      else{
        console.log(rides.message);
      }
    }
    catch(error){
      console.log(error);
    }
    }
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-white backdrop-blur-[2px] bg-opacity-20 p-6 sm:p-auto rounded-lg">
          <div className="text-2xl sm:text-3xl font-bold text-gray-300 text-left flex justify-start">
            <span>Book a ride</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-x-3 p-4 justify-center items-center">
            <input
              type="text"
              placeholder="From"
              className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full sm:w-auto focus:border focus:border-primary"
              value={from}
              onChange={(e) =>{
                setFrom(e.target.value);
                setErrorMessage("");
                setShowError(false);
              }}
            />
            <img
              src={exchange}
              alt=""
              className="exchange w-8 h-8 rounded-full hover:shadow-md mt-2 hover:bg-gray-800 cursor-pointer self-center"
              onClick={handleExchangeClick}
            />
            <input
              type="text"
              placeholder="To"
              className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full sm:w-auto focus:border focus:border-primary"
              value={to}
              onChange={(e) =>{
                setTo(e.target.value);
                setErrorMessage("");
                setShowError(false);
              }}
            />
            
          </div>
          <div className='flex w-full justify-center gap-0'>
              <input type="text" className=' text-white p-2 w-[45%] md:w-[30%] outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-l-2xl placeholder-white focus:border focus:border-primary'
                placeholder='Date Of Ride'
                required
                value={dob === null ? "" : dob}
                onChange={(e) => setDOB(e.target.value)}
              />
              <input type="date" name="" id="" className='text-white p-2 w-9 outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-r-2xl placeholder-white focus:border focus:border-primary' onChange={(e) => setDOB(e.target.value)} />
          </div>
            {showError &&
            <span className='font-bold text-red-500 justify-center flex'>
              {errorMessage}
            </span>
            }
            <div className="flex justify-center mt-4">
              <button className="bg-primary text-white hover:bg-gray-800 hover:text-primary rounded-xl font-medium w-[40%] h-10"
                onClick={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>
                Search
              </button>

            </div>
            
          
        </div>
      </div>
    </Layout>
  );
};

export default Booking;