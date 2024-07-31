import { useState } from "react";
import yudoLogo3D from "../assets/images/judoLogo3D.png"

const NavComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
  const dynamicClasses = isOpen ? "opacity-100" : "opacity-0 -translate-x-full";

  return (
    <div>
    <header className="relative ">
      <div className="container px-6 py-4 mx-auto lg:flex lg:items-center lg:justify-between ">
        <div className="flex items-center justify-between ">
          <a className="flex items-center -mx-1" href="#">
           
            <img className="w-8 h-8 mx-1 sm:h-10 sm:w-10"src={yudoLogo3D} alt="main page" />
            <div className="mx-1 text-white ">
              <h3 className="uppercase tracking-[0.15em] font-semibold ">
              judo
              </h3>
              <p className="text-xs italic "> Domingo iruita</p>
            </div>
          </a>

          <button
            className="text-gray-600 lg:hidden "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={` absolute lg:static transition-all duration-300 w-full py-12 lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-20 sm:top-24 bg-blue-800 ${dynamicClasses}`}
        >
          <nav className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4 ">
            <a
              href="#home"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Home
            </a>

            <a
              href="#programs"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Programs & Events
            </a>

            <a
              href="#mision-vision"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
               Mision y Vision
            </a>

            <a
              href="#contact-me"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Contact Me
            </a>
            <a
              href="/all-flowers"
              className="font-bold text-white lg:text-[white] lg:hover:text-cyan-800 lg:mx-4"
            >
              Registrarse
            </a>
          </nav>
        </div>
      </div>
    </header>
  </div>
  )
}

export default NavComponent