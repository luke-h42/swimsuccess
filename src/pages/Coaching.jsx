import jane_doe from "../assets/jane-doe.webp";
import james_brown from "../assets/james-brown.webp";
import hannah_jones from "../assets/hannah-jones.webp";
import michael_smith from "../assets/michael-smith.webp";


export default function Coaching() {

  const coaches = [
    {id:1, name: 'Jane Doe', job: 'Swimming Coach', image: jane_doe, description: 'Jane specialises in endurance swimming and has over 10 years of open water swimming experience alongside 5 years of coaching.', email:'janedoe@swimsuccess.com'},
    {id:2, name: 'James Brown', job: 'Swimming Coach', image: james_brown, description: 'James swam competitively for 6 years before moving to coaching. He now shares his award winning technique as he focuses on swimming as well as land training.', email:'jamesbrown@swimsuccess.com'},
    {id:3, name: 'Hannah Jones', job: 'Swimming Coach', image: hannah_jones, description: 'Hannah is passionate about teaching beginners and emphasise on being streamline, breathing technique and stretching.', email:'hannahjones@swimsuccess.com'},
    {id:4, name: 'Michael Smith', job: 'Lifeguard Instructor', image: michael_smith, description: 'Michael has been lifeguarding for 8 years and is very experienced at both indoor and outdoor lifeguarding. Michael teaches essential water safety to prevent accidents.', email:'michaelsmith@swimsuccess.com'},
   
  ];
  return (
    <>
    <section className='flex items-center justify-center mt-10'>
     
      <div className="flex flex-col items-center pr-2 pl-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl mb-5">Meet our coaches</h1>
        <p className="text-base md:text-lg lg:text-2xl max-w-screen-sm lg:max-w-screen-lg text-pretty text-center ">Our experienced coaches are here to guide you every step of the way. Whether you’re a beginner or an advanced swimmer, we have the right coach to help you achieve your goals.</p>
      </div>
    </section>
    <section className="flex container mx-auto mt-10 mb-10 justify-center">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-xs md:max-w-full ">
                {coaches.map(coach => (
                  <div key={coach.id} className=" flex flex-col w-80">
                    <div>
                      <img className="w-80 h-80" loading="lazy"src={coach.image}></img>
                    </div>
                    <div className="flex flex-col flex-1 pt-2">
                      <h2 className="text-2xl font-bold">{coach.name}</h2>
                      <h3 className="text-sm mb-4">{coach.job}</h3>
                      <p className="text-lg flex-1 mb-4">{coach.description}</p>
                      <p className="text-sm ">{coach.email}</p>
                    </div>

                  </div>
                ))}
              </div>
    </section>
    </>
  )
}
