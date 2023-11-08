"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../../configurations/database");
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
exports.default = Students;
