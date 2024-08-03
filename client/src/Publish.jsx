import Layout from './Components/Layout'
import DragAndDrop from './Components/DragAndDrop'

const Publish = () => {
    const steps = [
      {
        step: 1,
        title: "Create your account",
        description: "Add your profile picture, a few words about you and your phone number to increase trust between members."
      },
      {
        step: 2,
        title: "Publish a ride",
        description: "Indicate departure and arrival points, the date of the ride and check our recommended price to increase your chances of getting your first passengers and ratings."
      },
      {
        step: 3,
        title: "Enjoy the ride",
        description: "That's how easy it is to start saving on travel costs!"
      },
    ]
  return (
    <Layout>
      <section>
      <div className="container pt-6 max-w-screen-xl pb-16 mx-auto md:justify-start flex flex-col md:flex-row items-start py-8">
        <div className="md:w-1/2 w-full justify-start mb-10 lg:mb-0">
          <div className="flex flex-col flex-wrap gap-5 px-0 md:px-10 sm:py-0 text-left">
          <h1 className="text-2xl text-left p-4 font-bold"> <span className="text-primary"> Publish </span> <span className='text-white'>a</span> <span className="text-primary"> Ride </span> <span className='text-white'> in Just </span><span className="text-primary">Minutes</span></h1>
            {steps.map(step => 
              <div key={step.step} className="flex flex-col md:items-start">
                <div className="w-8 h-8 inline-flex items-center justify-left text-primary mb-2">{step.step}</div>
                <div className="flex-grow">
                  <h2 className="text-lg title-font font-medium mb-3 text-gray-400">{step.title}</h2>
                  <p className="leading-relaxed text-muted-foreground text-base text-white">{step.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pub md:w-1/2 w-full">
            <div className='w-full bg-white backdrop-blur-[2px] bg-opacity-30 rounded-lg p-4'>
              <h1 className='text-gray-300 font-bold text-2xl'>Publish a ride</h1>
              <div className='bg-white'>
                <DragAndDrop />
              </div>
            </div>
        
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Publish