import { useNavigate } from "react-router-dom"
import { LoginNavbar } from "../../../components/Navbars/LoginNavbar"
import { SideBar } from "../../../components/Sidebar/Sidebar"
import { showErrorToast } from "../../../api/utilities/toastify"
import { useEffect } from "react"




export const Dashboard:React.FC = ()=>{
    const navigate = useNavigate()
    useEffect(() => {
        const student = localStorage.getItem('student');
        if (!student) {
          navigate('/');
          showErrorToast('You must be logged in');
        }
      }, []);

    return (
        <>
        <LoginNavbar />
        <SideBar />
        </>
    )
}