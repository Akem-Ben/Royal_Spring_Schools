"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DATABASE_NAME, DATABASE_HOST, DATABASE_USERNAME, DATABSE_PASSWORD, } = process.env;
exports.database = new sequelize_1.Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABSE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        encrypt: true,
    },
});
