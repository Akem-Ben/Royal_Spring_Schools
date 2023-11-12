import { useLocation, Navigate } from "react-router-dom";
// import {protectRouteToast} from './toastify'
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast } from "./toastify";

export const ProtectRoute = ({ children }: any) => {
  const location = useLocation();

  const isAuthenticated = localStorage.getItem("token");

  // Use ternary operator to conditionally render
  return isAuthenticated ? (
    <>
      {children}
    </>
  ) : (
    <>
      {showErrorToast("You must be logged in to access this page")}
      <Navigate to="/login" state={{ from: location }} />
    </>
  );
};
