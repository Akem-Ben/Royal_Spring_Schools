/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";
import uni2 from "../../../assets/loginpage/uni2.jpeg"
import eye from "../../../assets/eye.svg";
import { Input } from "../../../components/InputField/Input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../../../components/Navbars/LandingNavbar";
import { Footer } from "../../../components/Footer/Footer";
import { userLogin } from "../../../slice/studentSlice";
import { useAppDispatch } from "../../../store/hooks";

const LoginStudent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Add state for password visibility
  const [reg_no, setReg_no] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      const payload = {
        reg_no,
        password
      }
      // alert(email)
      await dispatch(userLogin(payload)).unwrap()
      setReg_no(" ");
      setPassword("");
      setLoading(false);

      // localStorage.setItem("token", data.token);
      // localStorage.setItem("user", JSON.stringify(data.User))
      navigate('/allcourses')
    } catch (error: any) {
      setLoading(false);
      if (error) {
        toast.error(error)
      } else if (error.request) {
        toast.error(`Internal Server Error`)
      } else {
        toast.error(`Error, ${error.message}`)
      }
    }
  }
  const backgroundImageStyle = {
    backgroundImage: `url(${uni2})`,
    height: "100%",
    overflow: "hidden",
  };

  return (
    <div className="md:flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-col lg:flex-row">
  <div
    className="bg-cover bg-center h-screen lg:w-1/2 relative object-none object-left"
    style={backgroundImageStyle}
  >
  </div>
  <div className="lg:items-center lg:flex lg:flex-col my-7 w-full md:mt-[80px] h-screen lg:w-1/2">
    <h1 className="text-green-600 text-[32px] font-[500] font-bodoni-moda">
      Royal Spring College
    </h1>
    <p className="text-green-600 text-[16px] font-[600] font-Inter mt-[32px] mb-[64px]">
      Welcome back to Royal Spring College.
    </p>
    <div>
    <form onSubmit={handleLogin} className="mx-2 lg:mx-auto lg:max-w-lg">
  <p className="text-[#0A2145] text-[16px] font-[600] font-Inter mb-2 lg:mb-4">
    Registration Number
  </p>
  <Input
    className="placeholder:text-[#98A2B3] placeholder:text-[16px] placeholder:font-[400] h-[46px] w-full lg:w-[320px] rounded border mb-4 lg:mb-6 pl-7"
    type="text"
    placeholder="Enter your Registration Number"
    required
    name="reg_no"
    value={reg_no}
    onChange={(e) => setReg_no(e.target.value)}
  />
  <p className="text-[#101828] text-[16px] font-[600] font-Inter mt-[16px] mb-[2px] lg:mb-4">
    Password
  </p>
  <div className="relative">
    <Input
      className="placeholder:text-[#98A2B3] placeholder:text-[16px] placeholder:font-[400] h-[46px] w-full lg:w-[320px] rounded border mb-4 lg:mb-6 relative password-input pl-7"
      type={passwordVisible ? "text" : "password"}
      placeholder="***************"
      required
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <div
      className="absolute inset-y-0 right-0 mb-0 flex items-center pr-7 cursor-pointer"
      onClick={() => setPasswordVisible(!passwordVisible)}
    >
      <img src={eye} alt="Toggle password visibility" />
    </div>
  </div>

  <p className="text-[#1570EF] text-[16px] font-[400] font-Inter mt-[16px] mb-[2px] lg:mb-4">
    <a href="resetPassword" className="underline text-green-600">
      Forgot Password
    </a>
  </p>

  <div className="mb-4 lg:mb-6">
    <button
      className="landing_btn py-3 px-4 w-full flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 font-inter hover:bg-white hover:text-green-700 hover:border-2"
    >
      {loading ? "Loading..." : "Login"}
    </button>
  </div>
  <div className="flex flex-col lg:flex-row items-center justify-center">
    <span className="text-[#98A2B3] text-[16px] font-[400] font-Inter mb-2 lg:mb-0 mr-0 lg:mr-4">
      Not yet enrolled?
    </span>
    <span className="text-[#088AB2] text-[16px] font-[400] font-Inter">
      <Link to="/signup" className="underline text-green-600">
        Sign Up here
      </Link>
    </span>
  </div>
</form>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginStudent;
