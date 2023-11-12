import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/landingpage/navbar/royal school.webp";
  

export const Navbar: React.FC = () => {

    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate("/login");
      };

    return (
        <div className={`sticky top-0 bg-[#0A2145] z-50`}>
        <section
          className={`top-0 flex flex-col md:flex-row justify-between items-center p-6 md:pl-20 md:pr-20 shadow-lg ${"animate__animated animate__backInDown"}`}
        >
          <a href="/"><div className="w-full md:w-auto h-[80px] flex">
            <img id="image_hero" src={logo} alt="school logo" className="h-100" />
          </div></a>
          <div className="flex flex-col md:flex-row gap-10 mt-4 md:mt-0 text-white">
            <a href="/"><p className="hover:text-green-700">Home</p></a>
            <a href=""><p className="hover:text-green-700">Academics</p></a>
            <a href=""><p className="hover:text-green-700">Research</p></a>
            <a href=""><p className="hover:text-green-700">News</p></a>
            <a href=""><p className="hover:text-green-700">Contact Us</p></a>
          </div>
          <div className="flex items-center justify-center md:h-full">
            <button
              className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 mt-4 md:mt-1 font-inter transition duration-300 hover:bg-white hover:text-green-700 hover:border-2"
              onClick={handleButtonClick}
            >
              Login
            </button>
          </div>
        </section>
      </div>
      
    )
}