import Layout from "./Components/Layout"

const About = () => {
  return (
    <Layout>
        <div className="flex justify-center mt-10">
          <div className='relative z-10 bg-white backdrop-blur-[2px] bg-opacity-20 p-4 rounded-lg w-full max-w-md mx-4 sm:mx-8 md:mx-12 lg:mx-0'>
            <div className="flex justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-gray-300 text-left flex justify-start">About Us</span>
            </div>
          </div>

        </div>
        
    </Layout>
  )
}

export default About