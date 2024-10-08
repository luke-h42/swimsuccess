import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import swim_success_logo from "../assets/swim-succes-logo-white-noname.png";

export default function Navbar() {
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest(".navbar-openable")
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav
      className=" bg-white sticky top-0 z-10 text-white h-14 md:flex"
      ref={navRef}
    >
      <div className="md:flex bg-primary md:justify-between md:w-full md:px-8 lg:px-16">
        <div className="py-2 flex items-center justify-between container mx-auto px-6  ">
          <div className="w-24 h-8">
            <Link to="/" className="cursor-pointer " onClick={closeNav}>
              <img
                className="w-24 h-8"
                src={swim_success_logo}
                alt="Swimsuccess Logo"
              ></img>
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              className="block w-10 h-10 "
              type="button"
              onClick={toggleNav}
              aria-controls="Navbar-menu"
            >
              <svg
                className="w-full h-full text-white md:hidden"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="current"
                viewBox="0 0 24 24"
              >
                {!navOpen ? (
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                ) : (
                  <path
                    className="navbar-openable"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="transparent"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          id="Navbar-menu"
          className={` md:flex md:items-center ${
            navOpen ? "flex flex-col" : "hidden"
          }`}
          ref={navRef}
        >
          <Link
            to="/"
            className="cursor-pointer  py-1 px-6 hover:bg-primary700 md:ml-2 navbar-openable active:bg-primary700"
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            to="/training-plans"
            className="cursor-pointer  py-1 mt-1 px-6 hover:bg-primary700 md:mt-0 md:ml-2 navbar-openable active:bg-primary700"
            onClick={closeNav}
          >
            Plans
          </Link>
          <Link
            to="/coaching"
            className="cursor-pointer  py-1 mt-1 px-6 hover:bg-primary700 md:mt-0 md:ml-2 navbar-openable active:bg-primary700"
            onClick={closeNav}
          >
            Coaching
          </Link>
          <Link
            to="/login"
            className="cursor-pointer  py-1 mt-1 px-6 hover:bg-primary700 md:mt-0 md:ml-2 navbar-openable active:bg-primary700"
            onClick={closeNav}
          >
            Login
          </Link>
          <Link
            to="/join-us"
            className="cursor-pointer  py-1 mt-1 px-6 mb-2 hover:bg-primary700 md:mt-0 md:mb-0 whitespace-nowrap md:ml-2 navbar-openable active:bg-primary700"
            onClick={closeNav}
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
