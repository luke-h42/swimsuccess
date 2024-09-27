import { useState } from 'react'
import { Link } from "react-router-dom";
import swim_success_logo from '../assets/swim-succes-logo-white-noname.png'


export default function Navbar() {

  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
  setNavOpen(!navOpen)
}


  return (
    <nav className=" bg-white sticky top-0 z-10 text-white h-14 md:flex">
      <div className='md:flex bg-primary md:justify-between md:w-full md:px-8 lg:px-16'>
        <div className='py-2 flex items-center justify-between container mx-auto px-6  '>
          <div className='w-24'>
            <Link to="/" className="cursor-pointer "><img src={swim_success_logo}></img></Link>
          </div>
        <div className='flex justify-center'>
          <button onClick={toggleNav}>
            <svg className="w-10 h-10 text-white md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path className={`${navOpen ? 'hidden' : ''}`} stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
              <path className={`${!navOpen ? 'hidden' : ''}`} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
          </button>
        </div>
        </div>
        <div className={` md:flex md:items-center ${navOpen ? 'flex flex-col' : 'hidden' }`}>
            <Link to="/" className="cursor-pointer  py-1 px-6 hover:bg-primary700 md:ml-2" >Home</Link>
            <Link to="/training-plans" className="cursor-pointer  py-1 mt-1 px-6 hover:bg-primary700 md:mt-0 md:ml-2" >Plans</Link>
            <Link to="/coaching" className="cursor-pointer  py-1 mt-1 px-6 hover:bg-primary700 md:mt-0 md:ml-2">Coaching</Link>
            <Link to="/login" className="cursor-pointer  py-1 mt-1 px-6 hover:bg-primary700 md:mt-0 md:ml-2">Login</Link>
            <Link to="/join-us" className="cursor-pointer  py-1 mt-1 px-6 mb-2 hover:bg-primary700 md:mt-0 md:mb-0 whitespace-nowrap md:ml-2">Join Us</Link>
        </div>
      </div>
  </nav>
  )
}

