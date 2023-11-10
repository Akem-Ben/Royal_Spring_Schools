"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCourses = void 0;
const helpers_1 = require("../../utilities/helpers");
const getAllCourses = async (req, res) => {
    try {
        const { page, limit, sort, search } = req.query;
        // Define default values or empty strings for parameters
        const queryParams = {
            page: page,
            limit: limit,
            sort: sort,
        };
        if (search) {
            let search2 = search.toLowerCase();
            queryParams.search = search2;
        }
        const courseFinder = await (0, helpers_1.axiosgetAllCourses)(queryParams);
        if (courseFinder.data === 'not found') {
            return res.status(404).json({ status: 'error', message: 'No matching courses found' });
        }
        const courseData = courseFinder.data;
        return res.status(200).json({ status: 'success', data: courseData });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
exports.getAllCourses = getAllCourses;
