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

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-4xl font-bold text-primary'>Fasten Your Belt</h1>
      <ul className='hidden md:flex'>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer ${
            location.pathname === '/' ? 'text-primary underline' : ''
          }`}
          onClick={handleHomeClick}
        >
          Home
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer ${
            location.pathname === '/booking' ? 'text-primary underline' : ''
          }`}
          onClick={handleBookingClick}
        >
          Booking
        </li>
        <li
          className={`p-4 hover:text-primary hover:underline cursor-pointer text-center ${
            location.pathname === '/publish' ? 'text-primary underline' : ''
          }`}
          onClick={handlePublishClick}
        >
          Publish ride
        </li>
        <li className='p-4 hover:text-primary hover:underline cursor-pointer'>About</li>
        <li className='p-4 hover:underline cursor-pointer bg-primary rounded-xl'>Login/Signup</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <img src={closeImg} alt="" className='w-8' /> : <img src={menuImg} className='w-8' />}
      </div>
      <ul className={nav ? 'fixed z-30  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary backdrop-blur-[3px] bg-opacity-25 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4 border-b-2 border-black' onClick={handleHomeClick}>Home</li>
        <li className='p-4 border-b-2 border-black' onClick={handleBookingClick}>Booking</li>
        <li className='p-4 border-b-2 border-black' onClick={handlePublishClick}>Publish ride</li>
        <li className='p-4 border-b-2 border-black'>About</li>
        <li className='p-4 border-b-2 border-black'>Login/Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
