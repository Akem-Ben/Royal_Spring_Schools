import heroImage from "../../../assets/landingpage/hero_image.png";
import "./Landingpage.css";
import { useNavigate } from "react-router-dom";
import users from "../../../assets/landingpage/users.png";
import arrow from "../../../assets/landingpage/arrow.png";
import hassel from "../../../assets/landingpage/hassel.png";
import wallet from "../../../assets/landingpage/wallet.png";
import secure from "../../../assets/landingpage/secure.png";
import lady from "../../../assets/landingpage/lady.png";
import contribution from "../../../assets/landingpage/contribution.png";
import integration from "../../../assets/landingpage/integration.png";
import notification from "../../../assets/landingpage/notification.png";
import comments from "../../../assets/landingpage/comments.png";
import comments2 from "../../../assets/landingpage/commnts2.png";
import instagram from "../../../assets/landingpage/instagram.png";
import twitter from "../../../assets/landingpage/twitter.png";
import youtube from "../../../assets/landingpage/youtube.png";



const LandingPage = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate("/signup");
    };
  
    return (
      <div className="min-h-screen flex flex-col">
        <section
          className={`sticky top-0 flex justify-between items-center p-6 pl-20 pr-20 bg-white shadow-lg ${"animate__animated animate__backInDown"}`}
        >
          <p className="text-cyan-600 text-center font-bodoni text-l md:text-3xl leading-tight tracking-tighter">
            Ajó Savings
          </p>
  
          <button
            className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-cyan-600 text-white h-10 mt-1 font-inter transition duration-300 hover:bg-white hover:text-cyan-600 hover:border-2"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </section>
        <section className="flex justify-center items-center bg-gray-100">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="md:w-1/2 p-6">
                <div className="hero_text1 text-5xl font-bold">
                  Achieve Financial Success with{" "}
                  <span className="ajo_word text-cyan-600">Ajó:</span> The Future
                  of <span className="ajo_word text-cyan-600">Smart Savings</span>
                  .
                </div>
                <div className="hero_text2 mt-10 text-inter font-normal text-base">
                  Experience the convenience of secure group savings and
                  personalized savings plans with Ajó Savings. Take control of
                  your finances and unlock a brighter financial future.
                </div>
  
                <button
                  className="landing_btn py-3 px-4 flex justify-center items-center gap-2 rounded-md bg-cyan-600 text-white h-10 mt-5 font-inter transition duration-300 hover:bg-white hover:text-cyan-600 hover:border-2"
                  onClick={handleButtonClick}
                >
                  Get Started
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="hero_image ml-10">
                  <img id="image_hero" src={heroImage} alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center gap-5 p-5 md:p-20 items-center">
          <div className="flex flex-col items-start gap-5 p-5 md:w-1/4">
            <img src={users} alt="Users" />
            <span className="text-black font-inter font-semibold text-base md:text-xl leading-140% tracking-0.25px">
              Join Thrift Groups
            </span>
            <span className="text-black font-inter font-normal text-small md:text-l leading-140% tracking-0.15px">
              Save collectively with rotating lump sum payouts, eliminating risks
              of traditional methods.
            </span>
            <div className="flex gap-2">
              <p className="text-cyan-600 font-inter text-small md:text-l font-normal">
                Learn more
              </p>
              <img
                src={arrow}
                alt="Arrow"
                className="img mt-2 w-8.556 h-[13.286px] flex-shrink-0"
              />
            </div>
          </div>
  
          <div className="flex flex-col items-start gap-5 p-5 md:w-1/4">
            <img src={hassel} />
            <span className="text-black font-inter font-semibold text-base md:text-xl leading-140% tracking-0.25px">
              Hassle-Free Cashouts
            </span>
            <span className="text-black font-inter font-normal text-small md:text-l leading-140% tracking-0.15px">
              Enjoy rotating lump sum payouts, ensuring fair distribution among
              group members.
            </span>
            <div className="flex gap-2">
              <p className="text-cyan-600 font-inter text-small md:text-l font-normal">
                Learn more
              </p>
              <img
                src={arrow}
                alt="Arrow"
                className="img mt-2 w-8.556 h-[13.286px] flex-shrink-0"
              />
            </div>
          </div>
  
          <div className="flex flex-col items-start gap-5 p-5 md:w-1/4">
            <img src={secure} />
            <span className="text-black font-inter font-semibold text-base md:text-xl leading-140% tracking-0.25px">
              Secure and Convenient
            </span>
            <span className="text-black font-inter font-normal text-small md:text-l leading-140% tracking-0.15px">
              Enjoy peace of mind with robust security measures and user-friendly
              wallet management.
            </span>
            <div className="flex gap-2">
              <p className="text-cyan-600 font-inter md:text-l text-small font-normal">
                Learn more
              </p>
              <img
                src={arrow}
                className="img mt-2 w-8.556 h-[13.286px] flex-shrink-0"
              />
            </div>
          </div>
  
          <div className="flex flex-col items-start gap-5 p-5 md:w-1/4">
            <img src={wallet} />
            <span className="text-black font-inter font-semibold text-base md:text-xl leading-140% tracking-0.25px">
              Easy Wallet Management
            </span>
            <span className="text-black font-inter font-normal text-small md:text-l leading-140% tracking-0.15px">
              Seamlessly manage your funds, add money, and withdraw when you need
              it.
            </span>
            <div className="flex gap-2">
              <p className="text-cyan-600 font-inter text-small md:text-l font-normal">
                Learn more
              </p>
              <img
                src={arrow}
                className="img mt-2 w-8.556 h-[13.286px] flex-shrink-0"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center gap-5 p-5 md:p-20 items-center">
          <div className="flex flex-col items-start gap-5 p-5 md:w-1/2">
            <p className="works text-cyan-600 font-inter text-2xl md:text-3xl font-semibold leading-140 tracking-tighter">
              How It Works
            </p>
            <div className="w-full md:w-4/5">
              <div className="flex gap-4 md:gap-20 mt-10">
                {" "}
                <div className="flex justify-center items-center h-7 w-7 rounded-full bg-cyan-100 text-base mt-17">
                  1
                </div>
                <div className="flex-shrink text-main-text font-inter text-base leading-140 tracking-tighter text-main-text text-[18px] font-semibold">
                  Sign Up in Seconds
                  <br />
                  <span className="self-stretch text-main-text font-inter text-base font-light leading-140 tracking-very-tight">
                    Create account with Ajó Savings <br />
                    and start saving.
                  </span>
                </div>
              </div>
              <div className="flex gap-4 md:gap-20 mt-5">
                <div className="flex justify-center items-center h-7 w-7 rounded-full bg-cyan-100 text-base mt-17">
                  2
                </div>
                <div className="flex-shrink text-main-text font-inter text-base leading-140 tracking-tighter text-main-text text-[18px] font-semibold">
                  Join or Create Thrift Groups
                  <br />
                  <span className="self-stretch text-main-text font-inter text-base font-light leading-140 tracking-very-tight">
                    Create your account quickly and start <br />
                    your savings journey within moments.
                  </span>
                </div>
              </div>
              <div className="flex gap-4 md:gap-20 mt-5">
                <div className="flex justify-center items-center h-7 w-7 rounded-full bg-cyan-100 text-base mt-17">
                  3
                </div>
                <p className="flex-shrink text-main-text font-inter text-base leading-140 tracking-tighter text-main-text text-[18px] font-semibold">
                  Automated Contributions
                  <br />
                  <span className="self-stretch text-main-text font-inter text-base font-light leading-140 tracking-very-tight">
                    Schedule automatic transfers from <br /> your wallet to your
                    savings group for <br /> hassle-free saving.
                  </span>
                </p>
              </div>
              <div className="flex gap-4 md:gap-20 mt-5">
                <p className="flex justify-center items-center h-7 w-7 rounded-full bg-cyan-100 text-base mt-17">
                  4
                </p>
                <p className="flex-shrink text-main-text font-inter text-base leading-140 tracking-tighter text-main-text text-[18px] font-semibold">
                  Track and Celebrate
                  <br />
                  <span className="self-stretch text-main-text font-inter text-base font-light leading-140 tracking-very-tight">
                    Monitor your savings growth, view <br /> contributions, and
                    celebrate milestones <br /> on our user-friendly dashboard.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
      <img src={lady} className="lady_img w-full md:w-auto" alt="Lady" />
    </div>
        </section>
        <section className="mt-10 md:mt-10">
    <div className="flex flex-col justify-between items-center w-full">
      <h1 className="font-inter font-semibold text-2xl md:text-3xl lg:text-4xl mb-10 text-cyan-600">
        Why use Ajo?
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-[70%]">
        <div className="flex w-full md:w-[300px] p-5 flex-col items-start gap-4">
          <img src={contribution} alt="Contribution Analytics" />
          <span className="font-inter font-semibold text-base">
            Contribution Analytics
          </span>
          <span className="font-inter text-base font-light">
            Admins gain valuable insights into group contributions and track
            member participation.
          </span>
        </div>
        <div className="flex w-full md:w-[300px] p-5 flex-col items-start gap-4">
          <img src={integration} alt="Wallet Integration" />
          <span className="font-inter font-semibold text-base">
            Wallet Integration
          </span>
          <span className="font-inter text-base font-light">
            Add funds to your wallet easily using various payment methods and
            withdraw securely.
          </span>
        </div>
        <div className="flex w-full md:w-[300px] p-5 flex-col items-start gap-4">
          <img src={notification} alt="Notifications and Reminders" />
          <span className="font-inter font-semibold text-base">
            Notifications and Reminders
          </span>
          <span className="font-inter text-base font-light">
            Stay informed about group activities, cashouts, and important updates.
          </span>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-gray-100 mt-20 flex justify-center p-8 md:p-20">
    <div className="w-full md:w-[90%]">
      <h1 className="flex justify-center font-inter text-2xl md:text-3xl lg:text-4xl text-cyan-600 mt-10 font-semibold">
        What our users say?
      </h1>
      <div className="bg-gray-100 flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center items-center md:justify-between mt-10">
    <img src={comments} className="w-70 h-40 md:w-80 md:h-80 mb-5 md:mb-0" />
    <img src={comments} className="w-70 h-40 md:w-80 md:h-80 mb-5 md:mb-0" />
    <img src={comments2} className="w-70 h-40 md:w-80 md:h-80" />
  </div>
  
  
  
    </div>
  </section>
  <section className="flex flex-col items-center gap-6 md:gap-24 bg-cyan-600 py-12 px-10 md:py-12 md:px-10">
    <div className="flex flex-col items-center gap-10 md:gap-16 justify-center">
      <h1 className="mt-4 text-white text-center font-bodoni text-xl md:text-4xl font-normal">Ajó Savings</h1>
      <div className="text-white font-inter text-sm md:text-base font-light flex items-center gap-2">
        <p className="for_more">For more enquiries:</p>
        <div className="flex items-center text-white font-inter text-sm md:text-base font-light">
          <p className="help">helpsupport@easylead.com</p>
        </div>
      </div>
    </div>
    <div className="bg-[#F2F4F7] w-11/12 md:w-97% h-0.5"></div>
    <div className="text-white mt-0 font-inter text-sm md:text-base font-light flex justify-between w-11/12 md:w-80%">
      <div className="font-inter text-sm md:text-base font-light">© 2023 EasyLend. All rights reserved</div>
      <div className="gap-2 md:gap-6 h-6 flex justify-between">
        <img src={instagram} alt="Instagram" className="h-full" />
        <img src={twitter} alt="Twitter" className="h-full" />
        <img src={youtube} alt="YouTube" className="h-full" />
      </div>
    </div>
  </section>
  
  
      </div>
    );
  };
  
  export default LandingPage;