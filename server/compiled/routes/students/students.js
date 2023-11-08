"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentEnroll_1 = require("../../controllers/students/studentEnroll");
const studentLogin_1 = require("../../controllers/students/studentLogin");
const router = (0, express_1.Router)();
router.post('/enroll', studentEnroll_1.registerStudent);
router.post('/login', studentLogin_1.studentLogin);
exports.default = router;
