import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASSWORD}`
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const sendmail = async(to:string, html:string)=>{
    try{
        const reponse = await transporter.sendMail({
            from: `${process.env.GMAIL_USER}`,
            to,
            subject: "Royal Spring Schools",
            html
        })
    }catch(err){
        console.log(err)
    }
}

export const emailHtml = (reg_no:string, password:any)=>{
    const mail = `<h3><em>Hello Vendor</em>,Your profile has been added to the student portal.<h3>
                    <p>Your Registration Number: ${reg_no}</p><br>
                    <p>Your Password: ${password}</p><br><br>
                    <p>
                    Thank You<br>
                    TEAM QUICKBITE</p>`

                    return mail
}