"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentCourseDetails = void 0;
const courses_1 = __importDefault(require("../../models/coursesModel/courses"));
const getStudentCourseDetails = async (req, res) => {
    try {
        const reg_no = req.user.reg_no;
        const course_code = req.params.course_code;
        const courseFinder = await courses_1.default.findOne({ where: { course_code, student_regNo: reg_no } });
        if (!courseFinder)
            return res.status(404).json({ status: `error`, message: `Course not found` });
        return res.status(200).json({ status: `success`, data: courseFinder });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internal Server Error` });
    }
};
exports.getStudentCourseDetails = getStudentCourseDetails;
