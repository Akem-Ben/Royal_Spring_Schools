"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passWordGenerator = exports.checkPassword = exports.verifySignature = exports.GenerateSignature = exports.hashPassword = exports.axiosVerifyStudent = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
const APP_SECRET = process.env;
//single_student/RSC-CHE-1213
const axiosVerifyStudent = async (reg_no) => {
    try {
        const url = `https://database-for-students-and-courses.onrender.com/student/single_student/${reg_no}`;
        const response = await axios_1.default.get(url);
        return response.data;
    }
    catch (error) {
        // Handle the error here
        if (error.response && error.response.status === 404) {
            return "not found"; // Return an empty array to indicate no data found
        }
        throw error; // Re-throw other errors
    }
};
exports.axiosVerifyStudent = axiosVerifyStudent;
const hashPassword = async (password) => {
    let saltRounds = 10;
    let salt = await bcryptjs_1.default.genSalt(saltRounds);
    return await bcryptjs_1.default.hash(password, salt);
};
exports.hashPassword = hashPassword;
const GenerateSignature = async (payload) => {
    return jsonwebtoken_1.default.sign({ payload }, `${APP_SECRET}`, { expiresIn: '10h' });
};
exports.GenerateSignature = GenerateSignature;
const verifySignature = async (signature) => {
    return jsonwebtoken_1.default.verify(signature, process.env.APP_SECRET);
};
exports.verifySignature = verifySignature;
const checkPassword = async (enteredPassword, savedPassword) => {
    return await bcryptjs_1.default.compare(enteredPassword, savedPassword);
};
exports.checkPassword = checkPassword;
const passWordGenerator = async (lastName) => {
    let passwordshuffle = lastName.toString();
    const mixup = passwordshuffle += Math.floor(100 + Math.random() * 9000);
    return mixup;
};
exports.passWordGenerator = passWordGenerator;
