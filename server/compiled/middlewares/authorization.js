"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authoriser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authoriser = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (authorization === undefined) {
            return res.status(401).send({
                status: "error",
                message: "Ensure that you are logged in"
            });
        }
        const pin = authorization.split(" ")[1];
        if (!pin || pin === "") {
            return res.status(401).send({
                status: "error",
                message: "Ensure that you are logged in"
            });
        }
        const decoded = jsonwebtoken_1.default.verify(pin, process.env.APP_SECRET);
        if (!decoded)
            return res.status(401).json({ status: `error`, message: `Ensure that you are logged in` });
        req.user = decoded;
        return next();
    }
    catch (err) {
        console.log("ERROR:", err);
        return res.status(401).send({
            status: "error",
            message: err
        });
    }
};
exports.authoriser = authoriser;
