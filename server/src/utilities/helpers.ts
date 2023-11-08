import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import axios from 'axios'

const APP_SECRET = process.env

//single_student/RSC-CHE-1213
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
  export const hashPassword = async(password:any) => {
        let saltRounds = 10
        let salt = await bcrypt.genSalt(saltRounds)
        return await bcrypt.hash(password, salt)
  }
  export const GenerateSignature = async(payload:any) => {
      return jwt.sign({payload}, `${APP_SECRET}`, {expiresIn:'10h'})
  }
  
  export const verifySignature= async(signature:string) => {
      return jwt.verify(signature, process.env.APP_SECRET!) as JwtPayload
  }
  export const checkPassword = async(enteredPassword:string, savedPassword:string)=>{
      return await bcrypt.compare(enteredPassword, savedPassword)
  }
  export const passWordGenerator = async(lastName:string)=>{
      let passwordshuffle = lastName.toString()
      const mixup = passwordshuffle += Math.floor(100 + Math.random() * 9000)
      return mixup
  }