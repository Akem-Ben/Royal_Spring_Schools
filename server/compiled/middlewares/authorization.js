"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authoriser = void 0;
const helpers_1 = require("../utilities/helpers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authoriser = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (authorization === undefined) {
            return res.status(401).send({
                status: "error",
                message: "Ensure that you are logged in",
            });
        }
        const pin = authorization.split(" ")[1];
        if (!pin || pin === "") {
            return res.status(401).send({
                status: "error",
                message: "Ensure that you are logged in",
            });
        }
        const decoded = await (0, helpers_1.verifySignature)(pin);
        if (!decoded) {
            return res.status(401).json({ status: "error", message: "Ensure that you are logged in" });
        }
        req.user = decoded;
        return next();
    }
    catch (err) {
        console.log("Token verification error:", err.message);
        return res.status(401).send({
            status: "error",
            message: err.message,
        });
    }
};
exports.authoriser = authoriser;
