"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../../configurations/database");
class Courses extends sequelize_1.Model {
}
Courses.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: false
    },
    student_regNo: {
        type: sequelize_1.DataTypes.STRING
    },
    isRegistered: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    isCompleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    name_of_course: {
        type: sequelize_1.DataTypes.STRING,
    },
    name_of_instructor: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    enrollment_status: {
        type: sequelize_1.DataTypes.STRING,
    },
    course_image: {
        type: sequelize_1.DataTypes.STRING,
    },
    duration: {
        type: sequelize_1.DataTypes.STRING,
    },
    schedule: {
        type: sequelize_1.DataTypes.STRING,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    perequisites: {
        type: sequelize_1.DataTypes.JSON //ARRAY(DataTypes.STRING),
    },
    syllabus: {
        type: sequelize_1.DataTypes.JSON,
    },
    students: {
        type: sequelize_1.DataTypes.JSON,
    },
    course_code: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        unique: true
    }
}, {
    sequelize: database_1.database,
    modelName: "Courses",
    timestamps: true
});
exports.default = Courses;
