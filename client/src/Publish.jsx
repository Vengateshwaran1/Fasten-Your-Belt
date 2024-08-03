import Layout from './Components/Layout'
import DragAndDrop from './Components/DragAndDrop'
import exchange from "../src/assets/exchange.png";

import { useState } from "react";


const Publish = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [carNumber,setCarNumber] = useState(null);
  const [carModel,setCarModel] = useState(null);
  const [phoneNumber,setPhoneNumber] = useState(null);
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dob,setDOB] = useState(null);

  

  const handleExchangeClick = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };
  const handleSubmit = () => {
    if (!name || !phoneNumber || !carNumber || !carModel) {
      setErrorMessage("Fill all the required field");
      setShowError(true);
      return;
    }
    };
    const steps = [
      {
        step: 1,
        title: "Create your account",
        description: "Add your profile picture, a few words about you and your phone number to increase trust between members."
      },
      {
        step: 2,
        title: "Publish a ride",
        description: "Indicate departure and arrival points, the date of the ride and check our recommended price to increase your chances of getting your first passengers and ratings."
      },
      {
        step: 3,
        title: "Enjoy the ride",
        description: "That's how easy it is to start saving on travel costs!"
      },
    ]
  return (
    <Layout>
      <section>
      <div className="container pt-6 max-w-screen-xl pb-16 mx-auto md:justify-start flex flex-col md:flex-row items-start py-8">
        <div className="md:w-1/2 w-full justify-start mb-10 lg:mb-0">
          <div className="flex flex-col flex-wrap gap-5 px-0 md:px-10 sm:py-0 text-left">
          <h1 className="text-2xl text-left p-4 font-bold"> <span className="text-primary"> Publish </span> <span className='text-white'>a</span> <span className="text-primary"> Ride </span> <span className='text-white'> in Just </span><span className="text-primary">Minutes</span></h1>
            {steps.map(step => 
              <div key={step.step} className="flex flex-col md:items-start">
                <div className="w-8 h-8 inline-flex items-center justify-left text-primary mb-2">{step.step}</div>
                <div className="flex-grow">
                  <h2 className="text-lg title-font font-medium mb-3 text-gray-400">{step.title}</h2>
                  <p className="leading-relaxed text-muted-foreground text-base text-white">{step.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pub md:w-1/2 w-full">
          <div className='relative z-10 w-full bg-white backdrop-blur-[2px] bg-opacity-30 rounded-lg p-4 md:p-4'>
            <h1 className='text-gray-300 font-bold text-2xl mb-4'>Publish a ride</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8'>
              <div className='bg-gray-300 w-full md:w-[20%] p-1 mt-2 rounded-lg '>
                <DragAndDrop />
              </div>
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <input
                  type="text"
                  placeholder="From"
                  className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
                  required
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
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
                  className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-2 mt-4'>
              <input type="text" className='p-2 w-full md:w-[25%] outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary '
                placeholder='Date Of Ride'
                required
                value={dob === null ? "" : dob} />
              <input type="date" name="" id="" className='p-2 w-full md:w-[6%] outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary  text-transparent' onChange={(e) => setDOB(e.target.value)} />
            </div>
            <div className='flex flex-col p-4 md:p-8 gap-y-3 mt-4'>
              <input
                type="text"
                placeholder="Name"
                className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
                onChange={(e) => { setErrorMessage(""); setShowError(false); setName(e.target.value) }}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
                onChange={(e) => { setErrorMessage(""); setShowError(false); setPhoneNumber(e.target.value) }}
                required
              />
              <input
                type="text"
                placeholder="Car Number"
                className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
                onChange={(e) => { setErrorMessage(""); setShowError(false); setCarNumber(e.target.value) }}
                required
              />
              <input
                type="text"
                placeholder="Car Model"
                className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
                onChange={(e) => { setErrorMessage(""); setShowError(false); setCarModel(e.target.value) }}
                required
              />
              {showError &&
                <span className='font-bold text-red-500 justify-center flex'>
                  {errorMessage}
                </span>
              }
              <div className='flex justify-center'>
                <button className="bg-primary text-white hover:bg-gray-800 hover:text-primary rounded-xl font-medium w-[40%] md:w-[20%] h-10"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}>
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Publish