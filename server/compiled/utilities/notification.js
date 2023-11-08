"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailHtml = exports.sendmail = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASSWORD}`
    },
    tls: {
        rejectUnauthorized: false
    }
});
const sendmail = async (to, html) => {
    try {
        const reponse = await exports.transporter.sendMail({
            from: `${process.env.GMAIL_USER}`,
            to,
            subject: "Royal Spring Schools",
            html
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.sendmail = sendmail;
const emailHtml = (reg_no, password) => {
    const mail = `<h3><em>Hello Vendor</em>,Your profile has been added to the student portal.<h3>
                    <p>Your Registration Number: ${reg_no}</p><br>
                    <p>Your Password: ${password}</p><br><br>
                    <p>
                    Thank You<br>
                    TEAM QUICKBITE</p>`;
    return mail;
};
exports.emailHtml = emailHtml;
