import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import menuImg from '../assets/menus.png';
import closeImg from '../assets/close.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePublishClick = () => {
    navigate('/publish');
  };

  const handleLoginClick=() => {
    navigate('/login');
  }

  const handleAboutClick=() => {
    navigate('/about');
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-4xl font-bold text-primary cursor-pointer' onClick={handleHomeClick}>Fasten Your Belt</h1>
      <ul className='hidden md:flex'>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] font-bold ${
            location.pathname === '/' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%] font-bold' : ''
          }`}
          onClick={handleHomeClick}
        >
          Home
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] font-bold${
            location.pathname === '/booking' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%] font-bold' : ''
          }`}
          onClick={handleBookingClick}
        >
          Booking
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] font-bold ${
            location.pathname === '/publish' || location.pathname === '/publish_ride' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%] font-bold' : ''
          }`}
          onClick={handlePublishClick}
        >
          Publish_Ride
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] font-bold ${
            location.pathname === '/about' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%] font-bold' : ''
          }`}
          onClick={handleAboutClick}
        >
          About
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] font-bold ${
            location.pathname === '/login' || location.pathname==='/signup' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%] font-bold' : ''
          }`}
          onClick={handleLoginClick}
        >
          Login/Signup
        </li>    
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <img src={closeImg} alt="" className='w-8' /> : <img src={menuImg} className='w-8' />}
      </div>
      <ul className={nav ? 'fixed z-30  left-0 top-0 w-[60%] p-2 border-r border-r-gray-900 bg-white backdrop-blur-[5px] bg-opacity-25 ease-in-out duration-500 mt-20' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4 border-b-2 border-black font-bold' onClick={handleHomeClick}>Home</li>
        <li className='p-4 border-b-2 border-black font-bold' onClick={handleBookingClick}>Booking</li>
        <li className='p-4 border-b-2 border-black font-bold' onClick={handlePublishClick}>Publish ride</li>
        <li className='p-4 border-b-2 border-black font-bold' onClick={handleAboutClick}>About</li>
        <li className='p-4 border-b-2 border-black font-bold' onClick={handleLoginClick}>Login/Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
