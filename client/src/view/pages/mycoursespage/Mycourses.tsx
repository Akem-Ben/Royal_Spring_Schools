import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/httpService';
import { LoginNavbar } from '../../../components/Navbars/LoginNavbar';
import { SideBar } from '../../../components/Sidebar/Sidebar';
import { showErrorToast } from '../../../api/utilities/toastify';
import Modal from '../../../components/Modal/Modal';
import { markCourseAsCompleted } from '../../../slice/studentSlice';
import { useAppDispatch } from '../../../store/hooks';

export const Mycourses: React.FC = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<any[]>([]);
  // const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [loadingState, setLoadingState] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  
  const dispatch = useAppDispatch()
  const handleView = (course: any) => {
    setSelectedCourse(course);
  };
  
  const itemsPerPage = 5;
  const closeModal = () => {
    setSelectedCourse(null);
  };
  const fetchData = async () => {
    try {
      const student = localStorage.getItem('student');
      if (!student) {
        navigate('/');
        showErrorToast('You must be logged in');
      } else {
        const response = await axios.get('/courses/student_courses');
        setCourses(response.data.data);
        setFilteredCourses(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleComplete = async(e:any, course_code:string) => {
    try{
        e.preventDefault()
        setLoadingState((prevState) => ({ ...prevState, [course_code]: true }));
        await dispatch(markCourseAsCompleted(course_code)).unwrap();
        setLoadingState((prevState) => ({ ...prevState, [course_code]: false }));
        await fetchData();
    }catch (error: any) {
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

  // const handleSort = () => {
  //   const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  //   setSortOrder(newSortOrder);
  //   // Sort the courses array based on enrollment status
  //   const sortedCourses = [...filteredCourses].sort((a, b) => {
  //     if (newSortOrder === 'asc') {
  //       return a.enrollment_status.localeCompare(b.enrollment_status);
  //     } else {
  //       return b.enrollment_status.localeCompare(a.enrollment_status);
  //     }
  //   });
  //   setCourses(sortedCourses);
  //   setFilteredCourses(sortedCourses);
  // };

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
  

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the courses array to get the current page's courses
  let currentCourses;
  filteredCourses.length > itemsPerPage ? (currentCourses = filteredCourses.slice(startIndex, endIndex)) : (currentCourses = filteredCourses);

  return (
    <>
      <LoginNavbar />
      <SideBar />
  <section className="bg-[#D9DDDC] pt-2 md:pt-[20px] ml-[10px] md:ml-[300px] mr-2 md:mr-[50px] h-[600px] flex flex-col justify-flex-start items-center mt-3">
    {/* <div className="mb-3 flex flex-col w-full md:w-[90%] justify-center text-center items-center">
      <div className="input-group w-full md:gap-4 flex flex-col md:flex-row">
      <div className="relative flex-grow">
    <input
      type="text"
      className="form-control h-[40px] p-[10px] w-full rounded-md mb-2 md:mb-0"
      placeholder="Input course code or instructor name or course name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  <button
    className="py-2 px-4 md:px-6 justify-center items-center rounded-md bg-green-600 text-white h-10 md:h-12 w-full md:w-auto font-inter mb-2 md:mb-0 flex-shrink-0"
    type="button"
    onClick={handleSearch}
    style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
  >
    Search
  </button>
      </div>
    </div> */}
    <div className="flex w-full md:w-[90%] mb-3 md:ml-[10px]">
  <div className="relative flex-grow">
    <input
      type="text"
      className="form-control h-[48px] p-[10px] w-[70%] rounded-md mb-2 md:mb-0"
      placeholder="Input course code or instructor name or course name"
      value={searchTerm}
      style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  <button
    className="py-2 px-4 md:px-6 justify-center items-center rounded-md bg-green-600 text-white md:h-12 w-full md:w-auto font-inter mb-2 md:mb-0 flex-shrink-0"
    type="button"
    onClick={handleSearch}
    style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
  >
    Search
  </button>
  </div>
</div>


    <table className="table w-full md:w-[90%] bg-[#0A2145] text-center overflow-x-auto">
      <thead className="text-white">
        <tr>
          <th></th>
          <th>Course Name</th>
          <th>Course Code</th>
          <th>Instructor</th>
          <th>Enrollment Status</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className="w-[100%]">
        {Array.isArray(currentCourses) && currentCourses.length !== 0 ? (
          currentCourses.map((course) => (
            <tr key={course.id} className="pl-[40px] w-[100%] bg-green-300 border-b border-gray-500">
              <td className="align-middle border-r border-gray-500 w-[300px] pl-[50px]"><img className="w-[50%]" src={course.course_image} /></td>
              <td className="align-middle border-r border-gray-500">{course.name_of_course}</td>
              <td className="align-middle border-r border-gray-500">{course.course_code}</td>
              <td className="align-middle border-r border-gray-500">{course.name_of_instructor}</td>
              {course.enrollment_status === 'closed' ? (
                <td className="align-middle border-r bg-red-400 border-gray-500">{course.enrollment_status}</td>
              ) : (
                <td className="align-middle border-r border-gray-500">{course.enrollment_status}</td>
              )}
              <td className="align-middle">
                <button className="py-2 px-4 justify-center items-center rounded-md bg-green-600 text-white h-15 md:mt-1 font-inter hover:bg-[#0A2145] hover:text-green-200"
                  type="button" onClick={() => handleView(course)}>View Details</button>
              </td>
              <td className="align-middle">
                {course.isCompleted === false ? (
                  <button className="py-2 px-4 justify-center items-center rounded-md bg-green-600 text-white h-15 md:mt-1 font-inter hover:bg-[#0A2145] hover:text-green-200"
                    type="button" onClick={(e) => handleComplete(e, course.course_code)}
                    disabled={loadingState[course.course_code]}>{loadingState[course.course_code] ? "Loading..." : "Mark as Completed"}</button>
                ) : (
                  <button disabled>Already Completed</button>
                )}
              </td>
            </tr>
          ))
        ): null}
      </tbody>
    </table>
    <br />
      {Array.isArray(currentCourses) && currentCourses.length === 0 && (
  <p className="text-center">NO COURSES FOUND</p>
)}
    <div className="flex mt-3 flex-wrap">
      {Array.from({ length: Math.ceil(courses.length / itemsPerPage) }, (_, index) => (
        <button
          key={index + 1}
          className={`mx-1 my-1 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-[#0A2145] hover:text-green-200 ${
            currentPage === index + 1 ? 'bg-green-600' : ''
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </section>
  {selectedCourse && (
    <Modal courseDetails={selectedCourse} onClose={closeModal} />
  )}
</>

  );
};
