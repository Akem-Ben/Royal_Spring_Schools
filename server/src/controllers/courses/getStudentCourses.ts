import {Request, Response} from 'express';
import {JwtPayload} from 'jsonwebtoken';
import { axiosgetAllCourses } from '../../utilities/helpers';
import Courses from '../../models/coursesModel/courses';

export const getStudentEnrolledCourses = async(req:JwtPayload, res:Response)=>{
    try{
        const reg_no = req.user.reg_no;
        const courseFinder = await Courses.findAll({where: {student_regNo:reg_no}})
        if(!courseFinder) return res.status(404).json({status: `error`, message: `No courses found`})
        return res.status(200).json({status: `success`, data: courseFinder})
    }catch(err:any){
        console.log(err.message)
        return res.status(500).json({status: `error`, message: `Internal Server Error`})
    }
}
  