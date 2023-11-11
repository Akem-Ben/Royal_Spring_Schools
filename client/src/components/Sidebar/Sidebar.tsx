// SideBar component
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/landingpage/navbar/royal school.webp";
import { showSuccessToast } from "../../api/utilities/toastify";

export const SideBar: React.FC = () => {
  const navigate = useNavigate();
  let student: any = localStorage.getItem("student");
  student = JSON.parse(student);
  //   console.log('student is',student)
  const handleButtonClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    showSuccessToast('Successfully logged out')
    localStorage.clear();
    navigate("/")
  }

  return (
    <div
      className={`fixed top-0 left-0 h-full w-70 bg-green-800 shadow-lg z-50`}
    >
      <section
        className={`flex flex-col items-center text-center p-6 md:pl-4 md:pr-4`}
      >
        <div className="flex flex-col gap-10 mt-4 text-white">
          {/* <a href="/"> */}
          <div className="flex-col w-[200px] mb-[40px] h-[150px] items-center justify-center text-center">
  <img
    id="image_hero"
    src={student.student_image}
    alt="school logo"
    className="h-20 w-20 rounded-full mx-auto mb-4" // Add mb-4 (or any value you prefer) for bottom margin
  />
  <p className="text-white text-sm font-bodoni md:text-xl leading-tight font-bold tracking-tighter">
    {student.firstName} {student.lastName}
  </p>
</div>


          {/* </a> */}
          <a href="/dashboard">
            <p className="hover:text-green-300">Dashboard Home</p>
          </a>
          <a href="/allcourses">
            <p className="hover:text-green-300">All Courses</p>
          </a>
          <a href="/mycourses">
            <p className="hover:text-green-300">My Courses</p>
          </a>
          <a href="">
            <p className="hover:text-green-300">Edit Profile</p>
          </a>
          <a href="#" onClick={handleLogout}>
            <p className="hover:text-green-300">Logout</p>
          </a>
        </div>
      </section>
    </div>
  );
};
