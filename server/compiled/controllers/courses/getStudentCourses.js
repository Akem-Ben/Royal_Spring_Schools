"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentEnrolledCourses = void 0;
const courses_1 = __importDefault(require("../../models/coursesModel/courses"));
const sequelize_1 = require("sequelize");
// export const getStudentEnrolledCourses = async (req: JwtPayload, res: Response) => {
//     try {
//         const search = req.query.search
//         const reg_no = req.user.reg_no;
//         if(!search || search === ""){
//             const Finder:any = await Courses.findAll({
//                 where: {
//                     student_regNo: reg_no,
//                 },
//             }) as unknown as CourseAttributes;
//             if (!Finder) {
//                 return res.status(404).json({ status: `error`, message: `No courses found` });
//             }
//             return res.status(200).json({ status: `success`, data: Finder });
//         }else{
//             const Finder:any = await Courses.findAndCountAll({
//                 where: {
//                     student_regNo: reg_no, course_code: search || name_of_course: search || name_of_instructor: search
//                 },
//             }) as unknown as CourseAttributes;
//             if (!Finder || Finder.count === 0) {
//                 return res.status(404).json({ status: `error`, message: `No courses found` });
//             }
//             return res.status(200).json({ status: `success`, data: Finder});
//         }
//     } catch (err: any) {
//         console.log(err.message);
//         return res.status(500).json({ status: `error`, message: `Internal Server Error` });
//     }
// };
const getStudentEnrolledCourses = async (req, res) => {
    try {
        const search = req.query.search;
        const reg_no = req.user.reg_no;
        if (!search || search === "") {
            const courses = await courses_1.default.findAll({
                where: {
                    student_regNo: reg_no,
                },
            });
            if (!courses || courses.length === 0) {
                return res.status(404).json({ status: 'error', message: 'No courses found' });
            }
            return res.status(200).json({ status: 'success', data: courses });
        }
        else {
            const coursesAndCount = await courses_1.default.findAndCountAll({
                where: {
                    student_regNo: reg_no,
                    [sequelize_1.Op.or]: [
                        { course_code: { [sequelize_1.Op.iLike]: `%${search}%` } },
                        { name_of_course: { [sequelize_1.Op.iLike]: `%${search}%` } },
                        { name_of_instructor: { [sequelize_1.Op.iLike]: `%${search}%` } },
                    ],
                },
            });
            const courses = coursesAndCount.rows;
            const count = coursesAndCount.count;
            if (!courses || count === 0) {
                return res.status(404).json({ status: 'error', message: 'No courses found' });
            }
            return res.status(200).json({ status: 'success', data: { courses, count } });
        }
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
exports.getStudentEnrolledCourses = getStudentEnrolledCourses;
