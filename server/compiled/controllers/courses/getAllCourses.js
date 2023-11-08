"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCourses = void 0;
const helpers_1 = require("../../utilities/helpers");
const getAllCourses = async (req, res) => {
    try {
        const courseFinder = await (0, helpers_1.axiosgetAllCourses)();
        if (courseFinder === 'not found')
            return res.status(404).json({ status: `error`, message: `No courses found` });
        const courseData = courseFinder.data;
        return res.status(200).json({ status: `success`, data: courseData });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internal Server Error` });
    }
};
exports.getAllCourses = getAllCourses;
