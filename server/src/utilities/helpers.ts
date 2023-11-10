import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import axios, { AxiosResponse } from 'axios'
import { Request, Response } from 'express';

export const axiosVerifyStudent = async (reg_no:string)=>{
    try {
      const url = `https://database-for-students-and-courses.onrender.com/student/single_student/${reg_no}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error:any) {
      // Handle the error here
      if (error.response && error.response.status === 404) {
        return "not found"; // Return an empty array to indicate no data found
      }
      throw error; // Re-throw other errors
    }
  };

  export const axiosgetAllCourses = async (queryParams: { page?: string; limit?: string; search?: string; sort?: string }): Promise<AxiosResponse> => {
    try {
        const url = `https://database-for-students-and-courses.onrender.com/courses/all_courses`;

        const page = Number.parseInt(queryParams.page || '1', 10);
        const limit = Number.parseInt(queryParams.limit || '10', 10);
        const search = queryParams.search || '';
        const sort = queryParams.sort || 'name_of_course';

        const response = await axios.get(url, {
            params: {
                page,
                limit,
                search,
                sort,
            },
        });

        return response;
    } catch (error) {
        // Handle the error here
        if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
            throw new Error('not found'); // Throw an error to indicate no data found
        }
        throw error; // Re-throw other errors
    }
};

  export const axiosgetExternalCourseDetails = async (course_code:string)=>{
    try {
      const url = `https://database-for-students-and-courses.onrender.com/courses/single_course/${course_code}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error:any) {
      // Handle the error here
      if (error.response && error.response.status === 404) {
        return "not found"; // Return an empty array to indicate no data found
      }
      throw error; // Re-throw other errors
    }
  }

  export const hashPassword = async(password:any) => {
        let salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
  }
  export const GenerateSignature = async(payload:any) => {
      return jwt.sign(payload, process.env.APP_SECRET!, {expiresIn:'10h'})
  }
  
  export const verifySignature = async (signature: string) => {
    try {
      return jwt.verify(signature, process.env.APP_SECRET!) as JwtPayload;
    } catch (error:any) {
      // Handle the error, log it, and decide how to respond to it.
      throw new Error(`Token verification error: ${error.message}`);
    }
  }
  
  export const checkPassword = async(enteredPassword:string, savedPassword:string)=>{
      return await bcrypt.compare(enteredPassword, savedPassword)
  }
  export const passWordGenerator = (lastName:string)=>{
      const mixup = lastName += Math.floor(100 + Math.random() * 9000)
      console.log('mixup', typeof mixup)
      return mixup.toString()
  }

  export const isValidRegistration = (registrationNumber: string): boolean => {
    const regex = /^RSC-[A-Z]{3}-\d{4}$/;
    return regex.test(registrationNumber);
  };