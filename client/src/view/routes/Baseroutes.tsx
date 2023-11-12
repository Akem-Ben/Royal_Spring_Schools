import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import LandingPage from "../pages/landingpage/Landingpage"
import VerifyStudent from "../pages/enrollmentpage/EnrollmentPage"
import LoginStudent from "../pages/loginpage/LoginPage";
import { Dashboard } from "../pages/dashboardpage/Dashboard";
import { Allcourses } from "../pages/allcoursespage/Allcourses";
import { Mycourses } from "../pages/mycoursespage/Mycourses";

export const BaseRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/signup" element={<VerifyStudent />}></Route>
            <Route path="/login" element={<LoginStudent />}></Route>
            {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
            <Route path="/allcourses" element={<Allcourses />}></Route>
            <Route path="/mycourses" element={<Mycourses />}></Route>
            </Routes>
            </ScrollToTop>
            </BrowserRouter>
    )
}