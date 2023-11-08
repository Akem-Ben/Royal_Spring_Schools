import {Request, Response} from 'express';
import {JwtPayload} from 'jsonwebtoken';
import { axiosgetAllCourses } from '../../utilities/helpers';

export const getAllCourses = async(req:JwtPayload, res:Response)=>{
    try{
        const courseFinder = await axiosgetAllCourses()
        if(courseFinder === 'not found') return res.status(404).json({status: `error`, message: `No courses found`})
        const courseData = courseFinder.data
        return res.status(200).json({status: `success`, data: courseData})
    }catch(err:any){
        console.log(err.message)
        return res.status(500).json({status: `error`, message: `Internal Server Error`})
    }
}
  