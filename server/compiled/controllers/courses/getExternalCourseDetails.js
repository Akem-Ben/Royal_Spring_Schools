"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExternalCourseDetails = void 0;
const helpers_1 = require("../../utilities/helpers");
const getExternalCourseDetails = async (req, res) => {
    try {
        const course_code = req.params.course_code;
        const courseFinder = await (0, helpers_1.axiosgetExternalCourseDetails)(course_code);
        if (courseFinder === 'not found')
            return res.status(404).json({ status: `error`, message: `Course not found` });
        const courseData = courseFinder.data;
        return res.status(200).json({ status: `success`, data: courseData });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: `error`, message: `Internal Server Error` });
    }
};
exports.getExternalCourseDetails = getExternalCourseDetails;
