import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/httpService';
import { LoginNavbar } from '../../../components/Navbars/LoginNavbar';
import { SideBar } from '../../../components/Sidebar/Sidebar';
import { showErrorToast } from '../../../api/utilities/toastify';
import { useAppDispatch } from '../../../store/hooks';
import { studentRegisterCourse } from '../../../slice/studentSlice';

export const Allcourses: React.FC = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);

  const dispatch = useAppDispatch();

  const [loadingState, setLoadingState] = useState<{ [key: string]: boolean }>({});
  const itemsPerPage = 5;

  const handleEnroll = async (e: any, course_code: string) => {
    try {
      e.preventDefault();
      setLoadingState((prevState) => ({ ...prevState, [course_code]: true }));
      await dispatch(studentRegisterCourse(course_code)).unwrap();
      setLoadingState((prevState) => ({ ...prevState, [course_code]: false }));
    } catch (error: any) {
      setLoadingState((prevState) => ({ ...prevState, [course_code]: false }));
      if (error.response) {
        showErrorToast(error.response.data.message);
        return;
      }
      if (error.request) {
        showErrorToast('Network Error');
        return;
      }
      if (error.message) {
        showErrorToast(error.message);
      }
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    const sortedCourses = [...courses].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.enrollment_status.localeCompare(b.enrollment_status);
      } else {
        return b.enrollment_status.localeCompare(a.enrollment_status);
      }
    });
    setCourses(sortedCourses);
    setFilteredCourses(sortedCourses);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

    const fetchData = async () => {
      try {
        const student = localStorage.getItem('student');
        if (!student) {
          navigate('/');
          showErrorToast('You must be logged in');
        } else {
          const response = await axios.get('/courses/all_courses');
          setCourses(response.data.data.data);
          setFilteredCourses(response.data.data.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    useEffect(() => {
    fetchData();
  }, []);

  // Update the handleSearch function in your React component
  const handleSearch = async () => {
    try {
      const searchTermLower = searchTerm.toLowerCase();
  
      if (searchTermLower === '') {
        setFilteredCourses(courses); // Reset to the original courses
      } else {
        const filtered = courses.filter((course) => {
          return (
            course.course_code.toLowerCase().includes(searchTermLower) ||
            course.name_of_course.toLowerCase().includes(searchTermLower) ||
            course.name_of_instructor.toLowerCase().includes(searchTermLower)
          );
        });
  
        setFilteredCourses(filtered);
      }
    } catch (error) {
      console.error('Error searching courses:', error);
    }
  };
  


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentCourses;
 filteredCourses.length > itemsPerPage ? (currentCourses = filteredCourses.slice(startIndex, endIndex)) : (currentCourses = filteredCourses);
  

  return (
    <>
      <LoginNavbar />
      <SideBar />
      <section className="bg-[#D9DDDC] pt-[20px] ml-[300px] mr-[50px] h-[800px] flex flex-col justify-flex-start items-center mt-[30px]">
      <div className="mb-3 flex flex-col w-full md:ml-[10px] md:w-[90%] justify-center text-center items-center">
      <div className="input-group w-full gap-2 md:gap-4 flex flex-col md:flex-row">
  <div className="relative flex-grow">
    <input
      type="text"
      className="form-control h-[40px] p-[10px] w-full md:w-[100%] rounded-md mb-2 md:mb-0"
      placeholder="Search for course name, course code or instructor name..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
 <button
  className="absolute top-0 right-0 py-2 px-4 bg-green-600 text-white h-10 md:h-10 font-inter"
  type="button"
  value={searchTerm}
  style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
  onClick={handleSearch}
>
  Search
</button>
  </div>
  <button
    className="py-2 px-4 md:px-6 justify-center items-center rounded-md bg-blue-600 text-white h-10 md:h-12 w-full md:w-auto font-inter flex-shrink-0"
    type="button"
    onClick={handleSort}
  >
    Sort by Enrollment
  </button>
</div>

  </div>

<table className="table w-full md:w-[90%] bg-[#0A2145] text-center overflow-x-auto">
  <thead className="text-white">
    <tr>
      <th className="p-2"></th>
      <th className="p-2">Course Name</th>
      <th className="p-2">Course Code</th>
      <th className="p-2">Instructor</th>
      <th className="p-2">Enrollment Status</th>
      <th className="p-2"></th>
    </tr>
  </thead>
  <tbody className="w-full">
  {Array.isArray(currentCourses) && currentCourses.length !== 0 ? (
          currentCourses.map((course) => (
        <tr key={course.id} className="pl-4 md:pl-[40px] w-full bg-green-300 border-b border-gray-500">
          <td className="p-2 align-middle items-center w-[300px] pl-[50px] border-r border-gray-500"><img className="w-[50%]" src={course.course_image} /></td>
          <td className="p-2 align-middle border-r border-gray-500">{course.name_of_course}</td>
          <td className="p-2 align-middle border-r border-gray-500">{course.course_code}</td>
          <td className="p-2 align-middle border-r border-gray-500">{course.name_of_instructor}</td>
          {course.enrollment_status === 'closed' ? (
            <td className="p-2 align-middle border-r bg-red-400 border-gray-500">{course.enrollment_status}</td>
          ) : (
            <td className="p-2 align-middle border-r border-gray-500">{course.enrollment_status}</td>
          )}
          <td className="p-2 align-middle">
            {course.enrollment_status === 'open' ? (
              <button
                className="py-2 px-4 justify-center items-center rounded-md bg-green-600 text-white h-10 md:mt-1 font-inter hover:bg-[#0A2145] hover:text-green-200"
                type="button"
                onClick={(e) => handleEnroll(e, course.course_code)}
                disabled={loadingState[course.course_code]}
              >
                {loadingState[course.course_code] ? 'Loading...' : 'Enroll'}
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
<br />
{Array.isArray(currentCourses) && currentCourses.length === 0 && (
  <p className="text-center">NO COURSES FOUND</p>
)}

        <div className="flex mt-3">
          {Array.from({ length: Math.ceil(courses.length / itemsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-[#0A2145] hover:text-green-200 ${
                currentPage === index + 1 ? 'bg-green-600' : ''
              }`}
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
