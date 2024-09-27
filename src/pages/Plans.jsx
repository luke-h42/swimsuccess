import plans_bg from "../assets/training-main2.webp";
import breathing from "../assets/breathing-training.webp";
import stretching from "../assets/stretching-training.webp";
import endurance from "../assets/endurance-training.webp";
import speed from "../assets/speed-training.webp";
import diving from "../assets/diving-training.webp";
import { useState } from "react";
import { Link } from "react-scroll"

export default function Plans() {

  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"]
  const skills = ["Breathing", "Stretching", "Diving", "Speed", "Endurance"]
  const trainingPlans = [
    {id:1, title: 'Breathing', level: 'Beginner', image: breathing, description: 'Technique based session focusing on alternating freestyle breathing every 3 strokes'},
    {id:2, title: 'Speed', level: 'Beginner', image: speed, description: 'Speed based sessions focusing on interval training to progressively get faster'},
    {id:3, title: 'Diving', level: 'Beginner', image: diving, description: 'Technique based sessions focusing on diving into the water and minimising drag'},
    {id:4, title: 'Breathing', level: 'Intermediate', image: breathing, description: 'Technique based session focusing on alternating freestyle breathing every 3 strokes'},
    {id:5, title: 'Stretching', level: 'Beginner', image: stretching, description: 'A series of beginner level stretches necessary for every swimmer'},
    {id:6, title: 'Endurance', level: 'Advanced', image: endurance, description: 'A session of sustained, moderate paced swimming over a long period to improve stamina'},
    {id:7, title: 'Breathing', level: 'Expert', image: breathing, description: 'Technique based session focusing on alternating freestyle breathing every 3 strokes'},
    {id:8, title: 'Breathing', level: 'Advanced', image: breathing, description: 'Technique based session focusing on alternating freestyle breathing every 3 strokes'},
  ];
  
  const [selectedLevel, setSelectedLevel] = useState("All")
  // const [selectedSkill, setSelectedSkill] = useState("Skill")
  const filterByLevel = selectedLevel === 'All' ? trainingPlans : trainingPlans.filter(plan => plan.level === selectedLevel)
  const levelChange = (e) => {setSelectedLevel(e.target.value)}
  return (
    <>
    <section
        className="flex items-center  min-h-[calc(100vh-56px)] w-full bg-center bg-cover bg-no-repeat md:bg-center bg-blend-overlay bg-black/50"
        style={{ backgroundImage: `url(${plans_bg})` }}
      >
        <div className="flex flex-col items-center text-white w-full px-3 mx-auto gap-8 ">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl ">
            Train like a pro
          </h1>
          <Link to="plans" smooth={true} duration={500} offset={-96} role="button" aria-label="Scroll to training plans">
          <svg className="h-10 sm:h-12 md:h-14 lg:h-20 cursor-pointer hover:fill-primary"fill="#ffffff" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> </g> </g> </g> </g></svg>
          </Link>
        </div>
        </section>
        <section className="flex flex-col justify-center min-h-screen lg:min-h-screen items-center container mx-auto mb-10 mt-10 " id="plans">
          <div>
            <div className="mb-10">
              <label htmlFor="level" id="level" className="mr-5">Choose Level</label>
              <select name="level" id="level" onChange={levelChange} value={selectedLevel} className="border border-neutral-400 rounded-sm p-1">
                <option value="All">All</option>
                {levels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-xs md:max-w-full ">
                {filterByLevel.map(plan => (
                  <a href='#plans'>
                  <div key={plan.id} className="bg-white  border border-neutral-200 rounded-md drop-shadow-md flex flex-col ">
                    <div>
                      <img className="w-full h-64" loading="lazy"src={plan.image}></img>
                    </div>
                    <div className="p-5">
                    <h2 className="text-2xl font-bold">{plan.title}</h2>
                    <h3 className="text-sm mb-4">{plan.level}</h3>
                    <p className="text-lg">{plan.description}</p>
                    </div>

                  </div>
                  </a>
                ))}
              </div>
          </div>
        </section>
        </>
  )
}
