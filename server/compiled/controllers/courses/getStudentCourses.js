"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentEnrolledCourses = void 0;
const courses_1 = __importDefault(require("../../models/coursesModel/courses"));
// export const getStudentEnrolledCourses = async(req:JwtPayload, res:Response)=>{
//     try{
//         const reg_no = req.user.reg_no;
//         const courseFinder = await Courses.findAll({where: {student_regNo:reg_no}})
//         if(!courseFinder) return res.status(404).json({status: `error`, message: `No courses found`})
//         return res.status(200).json({status: `success`, data: courseFinder})
//     }catch(err:any){
//         console.log(err.message)
//         return res.status(500).json({status: `error`, message: `Internal Server Error`})
//     }
// }
const getStudentEnrolledCourses = async (req, res) => {
    try {
        const reg_no = req.user.reg_no;
        const courseFinder = await courses_1.default.findAndCountAll({
            where: {
                student_regNo: reg_no,
            },
        });
        if (!courseFinder || courseFinder.count === 0) {
            return res.status(404).json({ status: `error`, message: `No courses found` });
        }
        return res.status(200).json({ status: `success`, data: courseFinder.rows, count: courseFinder.count });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internal Server Error` });
    }
};
exports.getStudentEnrolledCourses = getStudentEnrolledCourses;
