/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../../components/Navbars/LandingNavbar";
import image from '../../../assets/enrollmentpage/studying.jpeg'
import { Footer } from "../../../components/Footer/Footer";
import { showErrorToast, showSuccessToast, showToast } from "../../../api/utilities/toastify";
import axios from "../../../api/httpService"
import { Input } from "../../../components/InputField/Input";

const VerifyStudent = () => {
  const [reg_no, setreg_no] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Equivalent to h-screen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {

        setLoading(true);
      // Simulate saving user data to the postgres database
      const payload = {
        reg_no,
      };
      const { data } = await axios.post("/students/enroll", payload);
      console.log('data is', data)
      showSuccessToast(data.message);
      setreg_no("");
      setLoading(false);
      navigate("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Error:", error.response.data.message);
      setLoading(false);
      if (error.response) {
        showErrorToast(error.response.data.message);
      } else if (error.request) {
        showToast("Internal Server Error");
      } else {
        showToast(`Error, ${error.message}`);
      }
    }
  };

  return (
    <>
      {/* <Header/> */}
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-screen bg-cover bg-center" style={backgroundImageStyle}>
        <div className="w-1/3-sm p-6 bg-white rounded-xl shadow">
        <p className="text-[#0A2145] text-center ml-[10px] mt-[20px] font-bodoni text-xl md:text-4xl md:text-3xl leading-tight font-bold tracking-tighter">
        Royal Spring College Student Portal
      </p><br />
          <h2 className="text-2xl text-[#0A2145] font-bold mb-4 text-center">Student Verification and Enrollment Page</h2>
          <div className="mb-4">
            <Input
              type="text"
              id="reg_no"
              placeholder="Enter Registration Number"
              className="w-[100%] p-2 border rounded"
              value={reg_no}
              required
              onChange={(e) => setreg_no(e.target.value)}
            />
          </div>
          <button
              className="landing_btn py-3 px-4 w-full flex justify-center items-center gap-2 rounded-md bg-green-600 text-white h-10 mt-4 md:mt-1 font-inter hover:bg-white hover:text-green-700 hover:border-2"
            >
              {loading ? "Loading..." : "Enroll"}
            </button>
          <p className="text-black text-center mt-4">
            Registered but no Registration Number Yet :  {"  "}
            <a style={{textDecoration:"none"}}
              href="mailto:contact@royalspringcolleges.com"
              className="text-green-800 font-bold"
            >
              Click here to Send an Email to The Student Affairs Unit
            </a>
          </p>
          <p className="text-black text-center mt-4">
            Already Enrolled?{" "}
            <a
            style={{textDecoration:"none"}}
              href="/login"
              className="text-green-800 font-bold"
            >
              Click here to login
            </a>
          </p>
        </div>
      </div>
      </form>
      <Footer />
    </>
  );
};

export default VerifyStudent;
