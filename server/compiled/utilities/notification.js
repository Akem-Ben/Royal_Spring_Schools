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
    const mail = `<!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          text-align: center;
          padding: 20px;
        }
    
        h3 {
          color: #333;
        }
    
        em {
          font-style: italic;
          color: #0072b2;
        }
    
        p {
          margin: 10px 0;
          color: #666;
        }
        
        #portal-info {
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    
        #signature {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div id="portal-info">
        <h3><em>Hello student</em>, Your profile has been added to the student portal.</h3>
        <p>Below are your login details:</p>
        <p>Your Registration Number: ${reg_no}</p>
        <p>Your Password: ${password}</p>
        <br><br>
        <p>Thank You</p>
        <p id="signature">ROYAL SPRING COLLEGE</p>
      </div>
    </body>
    </html>
`;
    return mail;
};
exports.emailHtml = emailHtml;
