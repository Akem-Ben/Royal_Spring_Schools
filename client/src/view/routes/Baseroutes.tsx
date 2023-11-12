import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import LandingPage from "../pages/landingpage/Landingpage";
import VerifyStudent from "../pages/enrollmentpage/EnrollmentPage";
import LoginStudent from "../pages/loginpage/LoginPage";
import { Allcourses } from "../pages/allcoursespage/Allcourses";
import { Mycourses } from "../pages/mycoursespage/Mycourses";
import ProfilePage from "../pages/myprofilepage/MyProfile";
import { ProtectRoute } from "../../api/utilities/protector";

export const BaseRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<VerifyStudent />}></Route>
          <Route path="/login" element={<LoginStudent />}></Route>
            <Route path="/profile" element={<ProtectRoute><ProfilePage /></ProtectRoute>} />
            <Route path="/allcourses" element={<ProtectRoute><Allcourses /></ProtectRoute>} />
            <Route path="/mycourses" element={<ProtectRoute><Mycourses /></ProtectRoute>} />
          </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
