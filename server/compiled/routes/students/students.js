"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentEnroll_1 = require("../../controllers/students/studentEnroll");
const studentLogin_1 = require("../../controllers/students/studentLogin");
const authorization_1 = require("../../middlewares/authorization");
const getStudentProfile_1 = require("../../controllers/students/getStudentProfile");
const router = (0, express_1.Router)();
router.post('/enroll', studentEnroll_1.registerStudent);
router.post('/login', studentLogin_1.studentLogin);
router.get('/profile', authorization_1.authoriser, getStudentProfile_1.getStudentProfile);
exports.default = router;
