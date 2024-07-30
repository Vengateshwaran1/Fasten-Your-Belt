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
        <div className="flex justify-center items-center">
          <span className="relative inline-flex">
            <button className='hover:border w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white bg-white backdrop-blur-[2px] bg-opacity-30 hover:border-primary'
              onClick={handleBookingClick}>Book A Ride</button>
            <span className="absolute flex h-3 w-3 top-5 right-[-1] ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-4 bg-primary"></span>
            </span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
