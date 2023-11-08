"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerACourse = void 0;
const helpers_1 = require("../../utilities/helpers");
const courses_1 = __importDefault(require("../../models/coursesModel/courses"));
const students_1 = __importDefault(require("../../models/studentsModel/students"));
const registerACourse = async (req, res) => {
    try {
        const studentRegNo = req.user.reg_no;
        const course_code = req.params.course_code;
        const student = await students_1.default.findOne({ where: { reg_no: studentRegNo } });
        const courseFinder = await (0, helpers_1.axiosgetExternalCourseDetails)(course_code);
        if (courseFinder === 'not found') {
            return res.status(404).json({ status: 'error', message: 'Course not found' });
        }
        if (courseFinder.enrollment_status === 'closed')
            return res.status(400).json({ status: `error`, message: `Enrollment has closed` });
        const enrolledCourse = await courses_1.default.findOne({
            where: {
                course_code: course_code,
                student_regNo: studentRegNo
            }
        });
        if (enrolledCourse)
            return res.status(404).json({ status: 'error', message: 'You are already enrolled for this course' });
        const studentDetails = {
            reg_no: studentRegNo,
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email
        };
        courseFinder.data.students.push(studentDetails);
        const newCourse = await courses_1.default.create({
            ...courseFinder.data,
            student_regNo: studentRegNo,
            isRegistered: true,
            isCompleted: false
        });
        await newCourse.save();
        const confirmRegistration = await courses_1.default.findOne({ where: { course_code, student_regNo: studentRegNo } });
        if (!confirmRegistration)
            return res.status(400).json({ status: `error`, message: `Unable to register` });
        return res.status(200).json({ status: 'success', data: newCourse });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
exports.registerACourse = registerACourse;
