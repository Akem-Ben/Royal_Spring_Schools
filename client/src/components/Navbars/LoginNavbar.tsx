import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/landingpage/navbar/royal school.webp";
  

export const LoginNavbar: React.FC = () => {

    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate("/signup");
      };

    return (
        <div className={`sticky top-0 bg-[#0A2145] z-50`}>
        <section
          className={`top-0 flex justify-between items-center p-6 pl-20 pr-20 shadow-lg ${"animate__animated animate__backInDown"}`}
        >
        <div className="w-10000 h-[80px] flex">
        <img id="image_hero" src={logo} alt="school logo" className="h-100"/>
          <p className="text-green-600 text-center ml-[10px] mt-[20px] font-bodoni text-l md:text-3xl leading-tight tracking-tighter">
            Royal Spring College Portal
          </p>
          </div>
          <div className="flex gap-10">
          <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white justify-center items-center">
                    Are you newly enrolled?
                </p>
          <button
            className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 mt-1 font-inter transition duration-300 hover:bg-white hover:text-green-700 hover:border-2"
            onClick={handleButtonClick}
          >
            Register
          </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
          <p className="text-white">
                    Already Registered?
                </p>
          <button
            className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 mt-1 font-inter transition duration-300 hover:bg-white hover:text-green-700 hover:border-2"
            onClick={handleButtonClick}
          >
            Login
          </button>
          </div>
          </div>
        </section>
        </div>
    )
}