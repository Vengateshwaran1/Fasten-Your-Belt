import Layout from "./Components/Layout"

const About = () => {
  return (
    <Layout>
        <div className="flex justify-center mt-10 gap-4 p-10">
          <div className='relative z-10 bg-white backdrop-blur-[2px] bg-opacity-20 p-4 rounded-lg w-full max-w-md mx-4 sm:mx-8 md:mx-12 lg:mx-0'>
            <div className="flex justify-center gap-4">
                <span className="text-2xl sm:text-4xl font-bold text-gray-300 text-left flex justify-start items-center">About Us</span>
                <p className="text-md sm:text-lg text-gray-300 text-left font-bold mt-4">
                  At <span className="text-primary cursor-pointer hover:underline">Fasten Your Belt</span>, we make travel easy. Our mission is to connect commuters and provide a simple, reliable way to share rides. We believe in making every journey enjoyable and stress-free. Join us today and experience a smarter way to travel!  
                </p>
            </div>
          </div>
        </div>
        
    </Layout>
  )
}

export default About