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

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-primary'>Fasten Your Belt</h1>
      <ul className='hidden md:flex'>
        <li
          className={`p-4 hover:border hover:rounded-lg cursor-pointer ${
            location.pathname === '/' ? 'border rounded-lg' : ''
          }`}
          onClick={handleHomeClick}
        >
          Home
        </li>
        <li
          className={`p-4 hover:border hover:rounded-lg cursor-pointer ${
            location.pathname === '/booking' ? 'border rounded-lg' : ''
          }`}
          onClick={handleBookingClick}
        >
          Booking
        </li>
        <li className='p-4 hover:border hover:rounded-lg cursor-pointer'>About</li>
        <li className='p-4 rounded-lg hover:border cursor-pointer bg-primary'>Login/Signup</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <img src={closeImg} alt="" className='w-8' /> : <img src={menuImg} className='w-8' />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary backdrop-blur-[2px] bg-opacity-20 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4 border-b-2 border-black' onClick={handleHomeClick}>Home</li>
        <li className='p-4 border-b-2 border-black' onClick={handleBookingClick}>Booking</li>
        <li className='p-4 border-b-2 border-black'>About</li>
        <li className='p-4 border-b-2 border-black'>Login/Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
