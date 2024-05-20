import { useState } from "react";
// Icons
import {
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";


const Heade = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-[#f1f5f9]">
    <div className="xl:w-1/6 text-center -mt-4">
      <a href="#" className="text-2xl font-bold relative p-1">
        Portafolio
      </a>
    </div>
    <nav
      className={`fixed bg-[#f1f5f9] w-[80%] md:w-[40%] xl:w-full h-full ${
        showMenu ? "left-0" : "-left-full"
      } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
    >
            <a href="#home" className="text-gray-800 hover:text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-600 transition duration-300 transform hover:scale-105 md:mx-4 md:my-0 my-2">
              Inicio
            </a>
            <a href="#SobreMi" className="text-gray-800 hover:text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-600 transition duration-300 transform hover:scale-105 md:mx-4 md:my-0 my-2">
              Sobre mi
            </a>
            <a href="#Habilidades" className="text-gray-800 hover:text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-600 transition duration-300 transform hover:scale-105 md:mx-4 md:my-0 my-2">
              Habilidades
            </a>
            <a href="#Experience" className="text-gray-800 hover:text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-600 transition duration-300 transform hover:scale-105 md:mx-4 md:my-0 my-2">
              Experiencia laboral
            </a>

    </nav>
    <button
      onClick={() => setShowMenu(!showMenu)}
      className="fixed top-4 right-4 xl:hidden text-2xl p-2 z-50"
    >
      {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
    </button>

  </header>
  )
}

export default Heade
