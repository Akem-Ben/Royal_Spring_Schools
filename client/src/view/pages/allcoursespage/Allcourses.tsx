import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/httpService';
import { LoginNavbar } from '../../../components/Navbars/LoginNavbar';
import { SideBar } from '../../../components/Sidebar/Sidebar';
import { showErrorToast, showSuccessToast } from '../../../api/utilities/toastify';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {studentRegisterCourse} from "../../../slice/studentSlice"


export const Allcourses: React.FC = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const [loadingState, setLoadingState] = useState<{ [key: string]: boolean }>({});
  const itemsPerPage = 20;

  const handleEnroll = async(e:any, course_code:string) => {
    try{
    e.preventDefault();
    setLoadingState((prevState) => ({ ...prevState, [course_code]: true }));
    await dispatch(studentRegisterCourse(course_code)).unwrap();
    setLoadingState((prevState) => ({ ...prevState, [course_code]: false }));
  } catch (error: any) {
    setLoadingState((prevState) => ({ ...prevState, [course_code]: false }));
    // setLoading(false);
    if (error.response) {
        // setLoading(false)
        showErrorToast(error.response.data.message);
        return
    }
    if (error.request) {
        // setLoading(false)
        showErrorToast("Network Error");
        return
    }
    if (error.message) {
        // setLoading(false)
        showErrorToast(error.message);
    }
}
};
  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    // Sort the courses array based on enrollment status
    const sortedCourses = [...courses].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.enrollment_status.localeCompare(b.enrollment_status);
      } else {
        return b.enrollment_status.localeCompare(a.enrollment_status);
      }
    });
    setCourses(sortedCourses);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const student = localStorage.getItem('student');
        if (!student) {
          navigate('/');
          showErrorToast('You must be logged in');
        } else {
          const response = await axios.get('/courses/all_courses');
          setCourses(response.data.data.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, [navigate]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the courses array to get the current page's courses
  const currentCourses = courses.slice(startIndex, endIndex);

  return (
    <>
      <LoginNavbar />
      <SideBar />
      <section className="bg-[#D9DDDC] pt-[20px] ml-[300px] mr-[50px] h-[600px] flex flex-col justify-flex-start items-center mt-[30px]">
        <div className="mb-3 flex w-[80%] h-[50px] justify-center text-center items-center">
          <div className="input-group w-[100%] gap[30px]">
            <input
              type="text"
              className="form-control h-[40px] p-[10px] w-[400px] rounded-l-md"
              placeholder="Search..."
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <button
              className="py-2 px-4 justify-center mr-[20px] items-center rounded-md bg-green-600 text-white h-10 md:mt-1 font-inter hover:bg-[#0A2145] hover:text-green-200"
              type="button"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Search
            </button>
            <button
              className="py-2 px-4 justify-center items-center rounded-md bg-blue-600 text-white h-10 md:mt-1 font-inter hover:bg-[#0A2145] hover:text-green-200"
              type="button"
              onClick={handleSort}
            >
              Sort by Enrollment
            </button>
          </div>
        </div>

        <table className="table w-[90%] bg-[#0A2145] text-center">
          <thead className="text-white">
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Instructor</th>
              <th>Enrollment Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="w-[100%]">
            {Array.isArray(courses) ? (
              courses.map((course) => (
                <tr key={course.id} className="pl-[40px] w-[100%] bg-green-300 border-b border-gray-500">
                  <td className="align-middle border-r border-gray-500">{course.name_of_course}</td>
                  <td className="align-middle border-r border-gray-500">{course.course_code}</td>
                  <td className="align-middle border-r border-gray-500">{course.name_of_instructor}</td>
                  {course.enrollment_status === 'closed' ? (
                    <td className="align-middle border-r bg-red-400 border-gray-500">{course.enrollment_status}</td>
                  ) : (
                    <td className="align-middle border-r border-gray-500">{course.enrollment_status}</td>
                  )}
                  <td className="align-middle">
                    {course.enrollment_status === 'open' ? (
                         <button
                         className="py-2 px-4 justify-center items-center rounded-md bg-green-600 text-white h-10 md:mt-1 font-inter hover:bg-[#0A2145] hover:text-green-200"
                         type="button"
                         onClick={(e) => handleEnroll(e, course.course_code)}
                         disabled={loadingState[course.course_code]}
                       >
                         {loadingState[course.course_code] ? "Loading..." : "Enroll"}
                       </button>
   
                    ) : (
                      <button disabled>Enrollment Closed</button>
                    )}
                  </td>
                </tr>
              ))
            ) : null}
          </tbody>
        </table>
        <div className="flex mt-3">
          {Array.from({ length: Math.ceil(courses.length / itemsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-[#0A2145] hover:text-green-200 ${currentPage === index + 1 ? 'bg-green-600' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};
