"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentProfile = void 0;
const students_1 = __importDefault(require("../../models/studentsModel/students"));
const getStudentProfile = async (req, res) => {
    try {
        const reg_no = req.user.reg_no;
        const findStudent = await students_1.default.findOne({ where: { reg_no } });
        if (!findStudent)
            return res.status(404).json({ status: `error`, message: `Student not found` });
        return res.status(200).json({ status: `success`, data: findStudent });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internal Server Error` });
    }
};
exports.getStudentProfile = getStudentProfile;
