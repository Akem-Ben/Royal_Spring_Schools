"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRegistration = exports.passWordGenerator = exports.checkPassword = exports.verifySignature = exports.GenerateSignature = exports.hashPassword = exports.axiosgetExternalCourseDetails = exports.axiosgetAllCourses = exports.axiosVerifyStudent = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const APP_SECRET = process.env.APP_SECRET;
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
const axiosgetAllCourses = async (queryParams) => {
    try {
        const url = `https://database-for-students-and-courses.onrender.com/courses/all_courses`;
        const search = queryParams.search || '';
        const response = await axios_1.default.get(url, {
            params: {
                search
            },
        });
        return response;
    }
    catch (error) {
        // Handle the error here
        if (axios_1.default.isAxiosError(error) && error.response && error.response.status === 404) {
            throw new Error('not found'); // Throw an error to indicate no data found
        }
        throw error; // Re-throw other errors
    }
};
exports.axiosgetAllCourses = axiosgetAllCourses;
const axiosgetExternalCourseDetails = async (course_code) => {
    try {
        const url = `https://database-for-students-and-courses.onrender.com/courses/single_course/${course_code}`;
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
exports.axiosgetExternalCourseDetails = axiosgetExternalCourseDetails;
const hashPassword = async (password) => {
    let salt = await bcryptjs_1.default.genSalt(10);
    return await bcryptjs_1.default.hash(password, salt);
};
exports.hashPassword = hashPassword;
const GenerateSignature = async (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.APP_SECRET, { expiresIn: '3h' });
};
exports.GenerateSignature = GenerateSignature;
const verifySignature = async (signature) => {
    try {
        return jsonwebtoken_1.default.verify(signature, process.env.APP_SECRET);
    }
    catch (error) {
        // Handle the error, log it, and decide how to respond to it.
        throw new Error(`Token verification error: ${error.message}`);
    }
};
exports.verifySignature = verifySignature;
const checkPassword = async (enteredPassword, savedPassword) => {
    return await bcryptjs_1.default.compare(enteredPassword, savedPassword);
};
exports.checkPassword = checkPassword;
const passWordGenerator = (lastName) => {
    const mixup = lastName += Math.floor(100 + Math.random() * 9000);
    return mixup.toString();
};
exports.passWordGenerator = passWordGenerator;
const isValidRegistration = (registrationNumber) => {
    const regex = /^RSC-[A-Z]{3}-\d{4}$/;
    return regex.test(registrationNumber);
};
exports.isValidRegistration = isValidRegistration;
