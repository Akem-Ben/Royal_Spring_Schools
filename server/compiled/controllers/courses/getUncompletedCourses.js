"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentUncompletedCourses = void 0;
const courses_1 = __importDefault(require("../../models/coursesModel/courses"));
const getStudentUncompletedCourses = async (req, res) => {
    try {
        const reg_no = req.user.reg_no;
        const courseFinder = await courses_1.default.findAll({ where: { student_regNo: reg_no, isCompleted: false } });
        if (!courseFinder)
            return res.status(404).json({ status: `error`, message: `No courses found` });
        if (courseFinder.length === 0)
            return res.status(200).json({ status: `success`, message: `No uncompleted courses` });
        return res.status(200).json({ status: `success`, data: courseFinder });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internal Server Error` });
    }
};
exports.getStudentUncompletedCourses = getStudentUncompletedCourses;
