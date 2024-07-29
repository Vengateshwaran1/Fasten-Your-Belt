import { useState } from "react";
import Layout from "./Components/Layout";
import exchange from "../src/assets/exchange.png";

const Booking = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleExchangeClick = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] bg-white backdrop-blur-[2px] bg-opacity-20 p-6 sm:p-8 rounded-lg">
          <div className="text-2xl sm:text-3xl font-bold text-gray-300 text-left flex justify-start">
            <span>Book a ride</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-x-3 p-4 justify-center">
              <input
                type="text"
                placeholder="From"
                className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full sm:w-auto focus:border focus:border-primary"
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
                className="bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl text-left text-white placeholder-white p-2 outline-none w-full sm:w-auto focus:border focus:border-primary"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
          </div>
          <div className="flex justify-center">
              <button className="bg-primary text-white hover:bg-gray-800 hover:text-primary rounded-xl p-2 font-medium text-xl w-full sm:w-auto">
                Search
              </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
