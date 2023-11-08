import { Router } from "express";
import { registerStudent } from "../../controllers/students/studentEnroll";
import { studentLogin } from "../../controllers/students/studentLogin";


const router = Router()

router.post('/enroll', registerStudent)
router.post('/login', studentLogin)

export default router