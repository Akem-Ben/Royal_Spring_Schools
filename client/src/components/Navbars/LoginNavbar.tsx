// LoginNavbar component
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/landingpage/navbar/royal school.webp";
import { showErrorToast } from "../../api/utilities/toastify";

export const LoginNavbar: React.FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className={`sticky top-0 h-[100px] bg-[#0A2145] z-50`}>
      <section
        className={`top-0 flex flex-col h-[100px] md:flex-row justify-between items-center p-6 md:pl-20 md:pl-96 shadow-lg ${"animate__animated animate__backInDown"}`}
      >
        <div className="flex flex-col md:flex-row gap-10 mt-4 md:mt-0 text-white">
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
        <a href="/">
          <div className="w-full md:w-auto h-[70px] flex">
            <img
              id="image_hero"
              src={logo}
              alt="school logo"
              className="h-20 w-20 rounded-full"
            />
            <p className="text-green-400 mr-[20px] w-[40px] ml-2 text-sm font-bodoni md:text-xl leading-tight font-bold tracking-tighter">
              Royal Spring College
            </p>
          </div>
        </a>
      </section>
    </div>
  );
};
