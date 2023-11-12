// ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import axios from '../../../api/httpService'; // Import Axios
import { LoginNavbar } from '../../../components/Navbars/LoginNavbar';
import { SideBar } from '../../../components/Sidebar/Sidebar';

interface Student {
  reg_no: string;
  firstName: string;
  lastName: string;
  year: number;
  faculty: string;
  department: string;
  email: string;
  student_image: string;
}

const ProfilePage: React.FC = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`/students/profile`);
        console.log('res', response.data.data)
        setStudent(response.data.data);
      } catch (error) {
        setError('Error fetching student data');
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!student) {
    return <div>No student data available</div>;
  }

  return (
    <>
        <LoginNavbar />
        <SideBar />
    <div className="min-h-screen justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-[70vh] w-[70%] ml-[300px]">
        <div className="bg-white h-[100%] overflow-hidden shadow-xl sm:rounded-lg">
        <div className="p-6">
            <div className="flex h-[200px] items-center justify-between">
              <img
                className="h-40 w-40 rounded-full object-cover mr-4"
                src={student.student_image}
                alt={`${student.firstName} ${student.lastName}'s Profile`}
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {student.firstName} {student.lastName}
                </h1>
                <p className="text-md text-gray-600">{student.email}</p>
                <p className="text-md text-gray-600">{student.reg_no}</p>
              </div>
            </div>
            <div className="mt-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-xl font-medium text-gray-500">Year</dt>
                  <dd className="mt-1 text-xl text-gray-900">{student.year}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-xl font-medium text-gray-500">Faculty</dt>
                  <dd className="mt-1 text-xl text-gray-900">{student.faculty}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-xl font-medium text-gray-500">Department</dt>
                  <dd className="mt-1 text-xl text-gray-900">{student.department}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
