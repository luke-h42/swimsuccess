import homepage_bg from "../assets/homepage-background-swimmer.jpg";

export default function Home() {
  return (
    <section
      className="flex items-center min-h-[calc(100vh-56px)] w-full bg-right bg-cover bg-no-repeat md:bg-center bg-blend-overlay bg-black/10"
      style={{ backgroundImage: `url(${homepage_bg})` }}
    >
      <div className="flex flex-col text-white w-full px-3 lg:w-full mx-auto gap-8 ml-1 sm:ml-10 md:ml-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl mb-[35vh] md:mb-[25vh] lg:mb-[30vh] xl:mb-[33vh]">Want to swim, <br />like a pro?</h1>
        <p className="text-base md:text-2xl lg:text-3xl drop-shadow-2xl w-11/12 md:w-8/12">
          Our training plans are developed by professional coaches and swimmers
          to help streamline your swimming progress!
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-full w-36 md:w-36 border border-white hover:bg-primary700">Train Now</button>
      </div>
    </section>
  );
}
