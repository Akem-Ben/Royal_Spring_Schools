"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../../configurations/database");
const courses_1 = __importDefault(require("../coursesModel/courses"));
class Students extends sequelize_1.Model {
}
Students.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: false
    },
    reg_no: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    year: {
        type: sequelize_1.DataTypes.STRING,
    },
    faculty: {
        type: sequelize_1.DataTypes.STRING,
    },
    department: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    student_image: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    sequelize: database_1.database,
    modelName: "Students",
    timestamps: true
});
Students.hasMany(courses_1.default, { foreignKey: 'student_regNo' });
courses_1.default.belongsTo(Students, { foreignKey: 'student_regNo' });
exports.default = Students;
