import "./Landingpage.css";
import contribution from "../../../assets/landingpage/contribution.png";
import integration from "../../../assets/landingpage/integration.png";
import notification from "../../../assets/landingpage/notification.png";
import { Navbar } from "../../../components/Navbars/LandingNavbar";
import {Footer} from '../../../components/Footer/Footer'
import vid from "../../../assets/landingpage/vid.webm"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleSignupButtonClick = () => {
      navigate("/signup");
    };
    const handleLoginButtonClick = () => {
      navigate("/login");
    };
    const handleButtonClick = () => {
      navigate("#");
    };
    return (
      <>
      <Navbar />
      <section className="relative h-[600px]">
  <video className="w-full" autoPlay loop muted style={{ height: '100%', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.5)', display: 'inline-block' }}>
    <source src={vid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Add a semi-transparent overlay */}
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>

  {/* Add your message */}
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center' }}>
    <div className="justify-center h-[80px] flex mb-[80px]">
      <p className="text-green-400 text-center ml-[10px] mt-[20px] font-bodoni text-xl md:text-4xl md:text-3xl leading-tight font-bold tracking-tighter">
        Royal Spring College Student Portal
      </p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center h-full mb-6 md:mb-0">
        <p className="text-white text-center mb-4 md:mb-0">
          Are you newly enrolled?
        </p>
        <br />
        <button
          className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 mt-1 font-inter transition duration-300 hover:bg-white hover:text-green-700 hover:border-2"
          onClick={handleSignupButtonClick}
        >
          Register
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-full mb-6 md:mb-0">
        <p className="text-white text-center mb-4 md:mb-0">
          Already Registered?
        </p>
        <br />
        <button
          className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 mt-1 font-inter transition duration-300 hover:bg-white hover:text-green-700 hover:border-2"
          onClick={handleLoginButtonClick}
        >
          Login
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-white text-center mb-4 md:mb-0">
          Return to University Main Website?
        </p>
        <br />
        <button
          className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 mt-1 font-inter transition duration-300 hover:bg-white hover:text-green-700 hover:border-2"
          onClick={handleButtonClick}
        >
          Click Here
        </button>
      </div>
    </div>
  </div>
</section>

      <div className="min-h-screen mt-[100px] flex flex-col">
        <section className=" md:mt-10">
          <div className="flex flex-col justify-between items-center w-full">
            <h1 className="font-inter font-semibold text-2xl md:text-3xl lg:text-4xl mb-10 text-green-600">
              HOW DO YOU USE THE STUDENT PORTAL?
            </h1>
            <div className="flex flex-col md:flex-row justify-between w-full md:w-[70%]">
              <div className="flex w-full md:w-[300px] p-5 flex-col items-start gap-4">
                <img src={contribution} alt="Contribution Analytics" />
                <span className="font-inter font-semibold text-base text-green-600">
                  Enroll in courses for the Semester
                </span>
                <span className="font-inter text-base font-light text-[#0A2145]">
                  You can enroll in courses for the new semester on your dashboard.
                </span>
              </div>
              <div className="flex w-full md:w-[300px] p-5 flex-col items-start gap-4">
                <img src={integration} alt="Wallet Integration" />
                <span className="font-inter font-semibold text-base text-green-600">
                  Keep track of completed courses 
                </span>
                <span className="font-inter text-base font-light text-[#0A2145]">
                  You can mark courses as completed on the dashboard. This keeps you informed of your progress during the semester in view.
                </span>
              </div>
              <div className="flex w-full md:w-[300px] p-3 flex-col items-start gap-4">
                <img src={notification} alt="Notifications and Reminders" />
                <span className="font-inter font-semibold text-base text-green-600">
                  Keep track of courses yet to be completed
                </span>
                <span className="font-inter text-base font-light text-[#0A2145]">
                  Stay informed about courses pending on your dashboard and lots more!!
                </span>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
     
      </>
    );
  };
  
  export default LandingPage;