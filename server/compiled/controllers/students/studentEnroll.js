"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStudent = void 0;
const students_1 = __importDefault(require("../../models/studentsModel/students"));
const helpers_1 = require("../../utilities/helpers");
const notification_1 = require("../../utilities/notification");
const registerStudent = async (req, res) => {
    try {
        const reg_no = req.body;
        const checkStudent = await students_1.default.findOne({ where: { reg_no } });
        if (checkStudent)
            return res.status(400).json({ status: `error`, message: `Student ${reg_no} already registered, please login` });
        const confirmStudent = await (0, helpers_1.axiosVerifyStudent)(reg_no);
        if (confirmStudent.data.message === 'Student not found')
            return res.status(404).json({ message: `${reg_no} does not exist, contact the Students Affairs Unit` });
        const studentData = confirmStudent.data.data;
        let password = (0, helpers_1.passWordGenerator)(studentData.lastName);
        let emailData = (0, notification_1.emailHtml)(studentData.reg_no, password);
        await (0, notification_1.sendmail)(studentData.email, emailData);
        let passwordHash = await (0, helpers_1.hashPassword)(password);
        const createStudent = await students_1.default.create({
            id: studentData.id,
            reg_no: studentData.reg_no,
            firstName: studentData.firstName,
            lastName: studentData.lastName,
            year: studentData.year,
            faculty: studentData.faculty,
            department: studentData.department,
            email: studentData.email,
            password: passwordHash,
            student_image: studentData.student_image
        });
        await createStudent.save();
        const findStudent = await students_1.default.findOne({ where: { reg_no } });
        if (!findStudent)
            return res.status(400).json({ message: `Unable to create` });
        return res.status(200).json({ status: `successful`, data: findStudent, });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: `Internal Server Error` });
    }
};
exports.registerStudent = registerStudent;
