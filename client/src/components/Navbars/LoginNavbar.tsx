import React from "react";
import logo from "../../assets/landingpage/navbar/royal school.webp";

export const LoginNavbar: React.FC = () => {

  return (
    <div className={`sticky top-0 bg-[#0A2145] z-50`}>
      <section
        className={`flex flex-col md:flex-row justify-between items-center pl-4 md:pl-[350px] pb-2 md:pb-[10px] pt-2 md:pt-[10px] pr-4 md:pr-[30px] shadow-lg animate__animated animate__backInDown`}
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-0 text-white">
          <a href="/">
            <p className="hover:text-green-700">Home</p>
          </a>
          <a href="">
            <p className="hover:text-green-700">Academics</p>
          </a>
          <a href="">
            <p className="hover:text-green-700">Research</p>
          </a>
          <a href="">
            <p className="hover:text-green-700">News</p>
          </a>
          <a href="">
            <p className="hover:text-green-700">Contact Us</p>
          </a>
        </div>
        <a href="/" className="flex flex-col items-center">
          <img
            id="image_hero"
            src={logo}
            alt="school logo"
            className="h-12 w-12 md:h-20 md:w-20 rounded-full mr-2"
          />
          <p className="text-green-400 text-sm md:text-xl font-bold tracking-tighter">
            Royal Spring College
          </p>
        </a>
      </section>
    </div>
  );
  
};
