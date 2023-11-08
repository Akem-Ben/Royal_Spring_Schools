import { JwtPayload } from "jsonwebtoken";
import {Request, Response} from 'express';
import { axiosgetExternalCourseDetails } from "../../utilities/helpers";
import Courses from "../../models/coursesModel/courses";

export const getStudentCompletedCourses = async(req:JwtPayload, res:Response)=>{
    try{
        const reg_no = req.user.reg_no
        const courseFinder = await Courses.findAll({where: {student_regNo:reg_no, isCompleted:true}})
        if(!courseFinder) return res.status(404).json({status: `error`, message: `No courses found in this category`})
        if(courseFinder.length===0)return res.status(200).json({status: `success`, message: `No completed courses yet`})
        return res.status(200).json({status: `success`, data: courseFinder})
    }catch(err:any){
        console.log(err.message)
        return res.status(500).json({status: `error`, message: `Internal Server Error`})
    }
}