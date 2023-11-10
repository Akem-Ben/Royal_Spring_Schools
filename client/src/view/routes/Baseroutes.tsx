import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import LandingPage from "../pages/landingpage/Landingpage"

export const BaseRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            </Routes>
            </ScrollToTop>
            </BrowserRouter>
    )
}