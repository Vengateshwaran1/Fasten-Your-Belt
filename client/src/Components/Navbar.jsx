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
      <h1 className='w-full text-4xl font-bold text-primary'>Fasten Your Belt</h1>
      <ul className='hidden md:flex'>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] ${
            location.pathname === '/' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%]' : ''
          }`}
          onClick={handleHomeClick}
        >
          Home
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] ${
            location.pathname === '/booking' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%]' : ''
          }`}
          onClick={handleBookingClick}
        >
          Booking
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] ${
            location.pathname === '/publish' || location.pathname === '/publish_ride' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%]' : ''
          }`}
          onClick={handlePublishClick}
        >
          Publish_Ride
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] ${
            location.pathname === '/about' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%]' : ''
          }`}
          onClick={handleAboutClick}
        >
          About
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer hover:bg-white rounded-lg hover:backdrop-blur-[2px] hover:bg-opacity-[20%] ${
            location.pathname === '/login' || location.pathname==='/signup' ? 'text-primary underline bg-white rounded-lg backdrop-blur-[2px] bg-opacity-[20%]' : ''
          }`}
          onClick={handleLoginClick}
        >
          Login/Signup
        </li>    
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <img src={closeImg} alt="" className='w-8' /> : <img src={menuImg} className='w-8' />}
      </div>
      <ul className={nav ? 'fixed z-30  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary backdrop-blur-[3px] bg-opacity-25 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4 border-b-2 border-black' onClick={handleHomeClick}>Home</li>
        <li className='p-4 border-b-2 border-black' onClick={handleBookingClick}>Booking</li>
        <li className='p-4 border-b-2 border-black' onClick={handlePublishClick}>Publish ride</li>
        <li className='p-4 border-b-2 border-black' onClick={handleAboutClick}>About</li>
        <li className='p-4 border-b-2 border-black' onClick={handleLoginClick}>Login/Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
