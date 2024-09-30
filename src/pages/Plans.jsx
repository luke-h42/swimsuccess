import plans_bg from "../assets/training-main2.webp";
import breathing from "../assets/breathing-training.webp";
import stretching from "../assets/stretching-training.webp";
import endurance from "../assets/endurance-training.webp";
import speed from "../assets/speed-training.webp";
import diving from "../assets/diving-training.webp";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Plans() {
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const skills = ["Breathing", "Stretching", "Diving", "Speed", "Endurance"];
  const trainingPlans = [
    {
      id: 1,
      title: "Breathing",
      level: "Beginner",
      image: breathing,
      description:
        "Technique based session focusing on alternating freestyle breathing every 3 strokes",
      training:
        "In this introductory session, participants will learn the fundamentals of breath awareness and basic breathing techniques. Focus will be on diaphragmatic breathing and establishing a mindful connection to your breath. We’ll cover the benefits of proper breathing for relaxation and stress reduction, guiding participants through simple exercises to enhance awareness and nurture a calm state of mind.",
    },
    {
      id: 2,
      title: "Speed",
      level: "Beginner",
      image: speed,
      description:
        "Speed based sessions focusing on interval training to progressively get faster",
      training:
        "In this introductory session, swimmers will focus on building a strong foundation in stroke mechanics and understanding basic swim techniques. Participants will learn essential skills such as body positioning, breathing, and the fundamentals of the four competitive strokes (freestyle, backstroke, breaststroke, and butterfly). Drills will emphasize efficiency in movements and water feel, ensuring comfort and confidence in the water. The session will conclude with a short, relaxed swim to reinforce the techniques learned.",
    },
    {
      id: 3,
      title: "Diving",
      level: "Beginner",
      image: diving,
      description:
        "Technique based sessions focusing on diving into the water and minimising drag",
      training:
        "In this introductory session, participants will learn the fundamentals of diving, focusing on safety, body positioning, and basic techniques. Emphasis will be placed on breath control and comfortable entry into the water. Participants will practice superficial dives from the pool edge and undergo water acclimatization exercises to build confidence.",
    },
    {
      id: 4,
      title: "Breathing",
      level: "Intermediate",
      image: breathing,
      description:
        "Technique based session focusing on alternating freestyle breathing every 3 strokes",
      training:
        "Building on the foundational techniques from the beginner session, this intermediate class introduces breath control practices designed to enhance lung capacity and improve breath efficiency. Participants will engage in various breathing patterns such as box breathing and alternate nostril breathing. Emphasis will be placed on developing rhythm and consistency in breath, leading to greater focus and mental clarity.",
    },
    {
      id: 5,
      title: "Stretching",
      level: "Beginner",
      image: stretching,
      description:
        "A series of beginner level stretches necessary for every swimmer",
      training:
        "Welcome to the Beginner Stretching Session! This is your first step towards improving flexibility, enhancing overall mobility, and promoting relaxation. Each session comprises gentle stretches designed to be accessible for all fitness levels, focusing on key muscle groups such as the neck, shoulders, back, hips, and legs.",
    },
    {
      id: 6,
      title: "Endurance",
      level: "Advanced",
      image: endurance,
      description:
        "A session of sustained, moderate paced swimming over a long period to improve stamina",
      training:
        "In this advanced level training program, which is designed to enhance endurance and introduce effective race strategies over a 90-minute duration, participants will focus on several key aspects of long-distance swimming. The session will feature extended swimming sets of 1500 meters or more, with an emphasis on achieving negative splits to improve pacing. If conditions permit, open water simulation drills will be incorporated to prepare swimmers for actual race scenarios. Additionally, interval training will be conducted with a set of 4x200 meters, featuring decreasing rest intervals to build speed endurance effectively. To refine swimming technique, advanced drills such as variations in breathing patterns and practice of flip turns will be included. By the end of the session, swimmers will not only develop the capacity to sustain longer distances but also begin to implement strategic approaches for racing outcomes.",
    },
    {
      id: 7,
      title: "Breathing",
      level: "Advanced",
      image: breathing,
      description:
        "Technique based session focusing on alternating freestyle breathing every 3 strokes",
      training:
        "In the advanced session, we will explore more complex breathing techniques that challenge the body and mind. Participants will learn to integrate breath with movement through practices like pranayama and breath-led yoga sequences. We will also delve into the physiological effects of breath on the nervous system and discuss how to use advanced techniques for increased energy and stamina.",
    },
    {
      id: 8,
      title: "Breathing",
      level: "Expert",
      image: breathing,
      description:
        "Technique based session focusing on alternating freestyle breathing every 3 strokes",
      training:
        "This expert-level session will push the boundaries of breathwork. Participants will engage in intensive techniques, including breath retention (Kumbhaka) and extended breath cycles. The focus will be on mastering breath for peak performance and personal transformation. We will also explore the psychological aspects of breath and its role in meditation, leading to profound experiences of self-awareness and inner calm.",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [booking, setBooking] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(undefined);
  const [selectedLevel, setSelectedLevel] = useState("All");
  // const [selectedSkill, setSelectedSkill] = useState("Skill")
  const filterByLevel =
    selectedLevel === "All"
      ? trainingPlans
      : trainingPlans.filter((plan) => plan.level === selectedLevel);
  const levelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  useEffect(() => {
    const disableScrolling = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScrolling = () => {
      document.body.style.overflow = "unset";
    };

    if (showModal) {
      disableScrolling();
    } else {
      enableScrolling();
    }

    return () => {
      enableScrolling();
    };
  }, [showModal]);
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
          <Link
            to="plans"
            smooth={true}
            duration={500}
            offset={-96}
            role="button"
            aria-label="Scroll to training plans"
          >
            <svg
              className="h-10 sm:h-12 md:h-14 lg:h-20 cursor-pointer hover:fill-primary"
              fill="#ffffff"
              height="100px"
              width="100px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path>{" "}
                      <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </Link>
        </div>
      </section>
      <section
        className="flex flex-col  min-h-screen lg:min-h-screen items-center container mx-auto mb-10 mt-10 "
        id="plans"
      >
        <div>
          <div className="mb-10">
            <label htmlFor="level" id="level" className="mr-5">
              Choose Level
            </label>
            <select
              name="level"
              id="level"
              onChange={levelChange}
              value={selectedLevel}
              className="border border-neutral-400 rounded-sm p-1"
            >
              <option value="All">All</option>
              {levels.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-xs md:max-w-full ">
            {filterByLevel.map((plan) => (
              <div
                key={plan.id}
                onClick={() => {
                  setSelectedPlan(plan);
                  setShowModal(true);
                }}
                className="bg-white  border border-neutral-200 rounded-md drop-shadow-md flex flex-col "
              >
                <div>
                  <img
                    className="w-full h-64"
                    loading="lazy"
                    src={plan.image}
                  ></img>
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-bold">{plan.title}</h2>
                  <h3 className="text-sm mb-4">{plan.level}</h3>
                  <p className="text-lg">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden pr-4 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={() => {
                  setShowModal(false);
                  setBooking(false);
                }}
              >
                <div
                  className="relative w-auto my-6 mx-auto max-w-3xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        {selectedPlan.title}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => {
                          setShowModal(false);
                          setBooking(false);
                        }}
                      >
                        <svg
                          className="w-8 h-8 text-black"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <h2 className="text-xl">{selectedPlan.level} Level</h2>
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        {selectedPlan.training}
                      </p>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      {!booking ? (
                        <button
                          className="bg-primary hover:bg-primary700 text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setBooking(true)}
                        >
                          Book Now
                        </button>
                      ) : (
                        <p className="px-6 text-pretty">
                          Thanks for booking a session with us! This is just a
                          frontend project, so booking is not supported.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="opacity-25 fixed inset-0 z-40 bg-black"
                onClick={() => {
                  setShowModal(false);
                  setBooking(false);
                }}
              ></div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
