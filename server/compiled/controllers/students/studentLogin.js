"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentLogin = void 0;
const students_1 = __importDefault(require("../../models/studentsModel/students"));
const helpers_1 = require("../../utilities/helpers");
const studentLogin = async (req, res) => {
    try {
        const { reg_no, password } = req.body;
        const findStudent = await students_1.default.findOne({ where: { reg_no } });
        console.log('confirm', typeof findStudent.dataValues);
        if (!reg_no)
            return res.status(404).json({ status: `error`, message: `Student not added to the portal, please register` });
        const validated = await (0, helpers_1.checkPassword)(password, findStudent.password);
        if (!validated) {
            return res.status(401).send({
                status: "error",
                message: "Password is incorect",
            });
        }
        const payload = {
            id: findStudent.id,
            reg_no: findStudent.reg_no,
            firstName: findStudent.firstName,
            lastName: findStudent.lastName,
            year: findStudent.year,
            faculty: findStudent.faculty,
            department: findStudent.department,
            email: findStudent.email,
            student_image: findStudent.student_image
        };
        const token = await (0, helpers_1.GenerateSignature)(payload);
        return res.status(200).json({
            status: "success",
            message: "Login Successful",
            data: findStudent,
            token,
        });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internl Server Error` });
    }
};
exports.studentLogin = studentLogin;
