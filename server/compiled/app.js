"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = require("./configurations/database");
const students_1 = __importDefault(require("./routes/students/students"));
const courses_1 = __importDefault(require("./routes/courses/courses"));
const students_2 = __importDefault(require("./models/studentsModel/students"));
const courses_2 = __importDefault(require("./models/coursesModel/courses"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/students", students_1.default);
app.use("/courses", courses_1.default);
database_1.database.sync({})
    .then(() => {
    console.log("Database is connected");
})
    .catch((err) => {
    console.log(err);
});
app.get('/', async (req, res) => {
    const allStudents = await students_2.default.findAll({});
    const allCourses = await courses_2.default.findAll({});
    return res.status(200).json({
        message: `All Data Fetched`,
        Students: allStudents,
        Courses: allCourses
    });
});
app.listen(process.env.PORT || 3030, () => {
    console.log(`App is listening on Port ${process.env.PORT || 3030}`);
});
