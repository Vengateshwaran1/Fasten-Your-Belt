import { useNavigate } from 'react-router-dom';
import Layout from './Components/Layout';

const Home = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <Layout>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-gray-300 font-bold p-2'>HAVE A GREAT JOURNEY.</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-300'>Have a SAFE Journey.</h1>
        <p className='md:text-2xl text-xl font-bold text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className='hover:border w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white bg-white backdrop-blur-[2px] bg-opacity-30'
          onClick={handleBookingClick}>Book A Ride</button>
      </div>
    </Layout>
  );
};

export default Home;