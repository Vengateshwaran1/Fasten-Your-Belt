import Layout from "./Components/Layout";
import { useState } from 'react';
import DragAndDrop from './Components/DragAndDrop';
import exchange from "../src/assets/exchange.png";

const Publish_ride = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [carNumber, setCarNumber] = useState(null);
  const [carModel, setCarModel] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dob, setDOB] = useState(null);

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

  return (
    <Layout>
      <div className="pub flex justify-center px-4 py-2 md:px-0 md:py-4">
        <div className="relative z-10 w-[80%] max-w-3xl bg-white backdrop-blur-[2px] bg-opacity-20 rounded-lg p-2 md:p-8">
          <h1 className="text-gray-300 font-bold text-2xl mb-4">Publish a ride</h1>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:gap-8">
            <div className="bg-gray-300 sm:w-full md:w-[20%] p-1 mt-2 rounded-lg">
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
          <div className="flex flex-row justify-center gap-2 mt-3">
            <input
              type="text"
              className="p-2 w-[40%] md:w-[25%] outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
              placeholder="Date Of Ride"
              required
              value={dob === null ? "" : dob}
            />
            <input
              type="date"
              name=""
              id=""
              className="p-2 md:w-9 w-10 outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary text-transparent"
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-4 md:p-8 gap-y-3 mt-2">
            <input
              type="text"
              placeholder="Name"
              className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
              onChange={(e) => {
                setErrorMessage("");
                setShowError(false);
                setName(e.target.value);
              }}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
              onChange={(e) => {
                setErrorMessage("");
                setShowError(false);
                setPhoneNumber(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Car Number"
              className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
              onChange={(e) => {
                setErrorMessage("");
                setShowError(false);
                setCarNumber(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Car Model"
              className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full focus:border focus:border-primary"
              onChange={(e) => {
                setErrorMessage("");
                setShowError(false);
                setCarModel(e.target.value);
              }}
              required
            />
            {showError && (
              <span className="font-bold text-red-500 justify-center flex">
                {errorMessage}
              </span>
            )}
            <div className="flex justify-center">
              <button
                className="bg-primary text-white hover:bg-gray-800 hover:text-primary rounded-xl font-medium w-[40%] md:w-[20%] h-10"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Publish_ride;