"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentEnrolledCourses = void 0;
const courses_1 = __importDefault(require("../../models/coursesModel/courses"));
const sequelize_1 = require("sequelize");
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
        const page = Number.parseInt(req.query.page) - 1 || 0;
        const limit = Number.parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        const sort = req.query.sort || courses_1.default;
        const sortOptions = [
            "",
            "enrollment_status",
            "duration"
        ];
        const sortOrder = sortOptions.includes(sort) ? [[sort, 'ASC']] : [];
        const reg_no = req.user.reg_no;
        const offset = page * limit;
        const courseFinder = await courses_1.default.findAndCountAll({
            where: {
                student_regNo: reg_no,
                [sequelize_1.Op.or]: [
                    { name_of_course: { [sequelize_1.Op.iLike]: `%${search}%` } },
                    { name_of_instructor: { [sequelize_1.Op.iLike]: `%${search}%` } },
                    { course_code: { [sequelize_1.Op.iLike]: `%${search}%` } },
                    { enrollment_status: { [sequelize_1.Op.eq]: search } }
                ]
            },
            order: sortOrder,
            limit: limit,
            offset: offset
        });
        if (!courseFinder || courseFinder.count === 0) {
            return res.status(404).json({ status: `error`, message: `No courses found in this category` });
        }
        return res.status(200).json({ status: `success`, data: courseFinder.rows, count: courseFinder.count });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internal Server Error` });
    }
};
exports.getStudentEnrolledCourses = getStudentEnrolledCourses;
