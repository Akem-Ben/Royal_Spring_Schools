import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import LandingPage from "../pages/landingpage/Landingpage"
import VerifyStudent from "../pages/enrollmentpage/EnrollmentPage"
import LoginStudent from "../pages/loginpage/LoginPage";

export const BaseRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/signup" element={<VerifyStudent />}></Route>
            <Route path="/login" element={<LoginStudent />}></Route>
            </Routes>
            </ScrollToTop>
            </BrowserRouter>
    )
}