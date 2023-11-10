"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentCompletedCourses = void 0;
const courses_1 = __importDefault(require("../../models/coursesModel/courses"));
const getStudentCompletedCourses = async (req, res) => {
    try {
        const page = Number.parseInt(req.query.page) - 1 || 0;
        const limit = Number.parseInt(req.query.limit) || 5;
        const reg_no = req.user.reg_no;
        const offset = page * limit;
        const courseFinder = await courses_1.default.findAndCountAll({
            where: {
                student_regNo: reg_no,
                isCompleted: true,
            },
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
exports.getStudentCompletedCourses = getStudentCompletedCourses;
// const pageAsNumber = Number.parseInt(req.query.page);
// const sizeAsNumber = Number.parseInt(req.query.size);
// let page = 1;
// if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
//   page = pageAsNumber;
// }
// let size = 10;
// if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 10) && !(sizeAsNumber < 1)){
//   size = sizeAsNumber;
// }
// const courseFinder = await Courses.findAll({where: {student_regNo:reg_no, isCompleted:true}})
