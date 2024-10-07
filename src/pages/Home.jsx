import { Link } from "react-router-dom";
import bgImageD from "../assets/homepage-background-swimmer-1920.jpg";
import bgImageM from "../assets/homepage-background-swimmer-m6.jpg";

export default function Home() {
  return (
    <>
      <section className="relative flex items-center min-h-[calc(100vh-56px)] w-full overflow-hidden">
        <picture className="absolute inset-0 max-h-screen">
          <source media="(max-width: 1280px)" srcSet={bgImageM} />
          <source media="(min-width: 1281px)" srcSet={bgImageD} />
          <img
            src={bgImageD}
            alt="Swimming background"
            className="w-full h-full object-cover"
            width={1920}
            height={1440}
          />
        </picture>
        <div className="relative z-10 flex flex-col text-white w-full px-3 lg:w-full mx-auto gap-8 ml-1 sm:ml-10 md:ml-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl mb-[35vh] md:mb-[25vh] lg:mb-[30vh] xl:mb-[33vh]">
            Want to swim,
            <br />
            like a pro?
          </h1>
          <p className="text-base md:text-2xl lg:text-3xl drop-shadow-2xl w-11/12 md:w-8/12">
            Our training plans are developed by professional coaches and
            swimmers to help streamline your swimming progress!
          </p>
          <Link to="/training-plans">
            <button className="bg-primary text-white py-2 px-4 rounded-lg w-36 md:w-36 border border-white hover:bg-primary700">
              Train Now
            </button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col justify-center min-h-screen lg:h-screen items-center container mx-auto md:max-w-screen-lg lg:max-w-screen-xl mb-10">
        <div className="mb-10 md:mb-20 mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold ">
            Why train with us
          </h1>
        </div>
        <div className="grid gap-4 lg:grid-cols-3 max-w-xs sm:max-w-md lg:max-w-full">
          <div className="bg-primary100 p-5 border border-neutral-200 rounded-md drop-shadow-md flex flex-col ">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Varied Workouts
            </h2>
            <p className="text-lg md:text-xl flex-1 mb-3">
              Choose between workout plans that focus on different elements of
              swimming: Technique, endurance or speed.
            </p>
            <Link to="/training-plans">
              <button className="bg-primary text-white py-2 rounded-lg w-36 md:w-36 hover:bg-primary700">
                Train Now
              </button>
            </Link>
          </div>
          <div className="bg-primary100 p-5 border border-neutral-200 rounded-md drop-shadow-md flex flex-col ">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Progress Tracking
            </h2>
            <p className="text-lg md:text-xl flex-1 mb-3">
              Keep track of how hard you’ve been working towards your goals by
              logging your workouts.
            </p>
            <Link to="/login">
              <button className="bg-primary text-white py-2 rounded-lg w-36 md:w-36 hover:bg-primary700">
                Login
              </button>
            </Link>
          </div>
          <div className="bg-primary100 p-5 border border-neutral-200 rounded-md drop-shadow-md flex flex-col ">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Coaching</h2>
            <p className="text-lg md:text-xl flex-1 mb-3">
              Get in touch with one of our swimming professionals to help
              customize your journey and keep you motivated.
            </p>
            <Link to="/coaching">
              <button className="bg-primary text-white py-2 rounded-lg w-36 md:w-36 hover:bg-primary700">
                Contact Coaches
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
