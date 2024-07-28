
const Hero = () => {
    return (
        <div className='text-black'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-gray-300 font-bold p-2'>
                    HAVE A GREAT JOURNEY.
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Have a SAFE Journey.
                </h1>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='hover:bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;