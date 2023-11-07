import nodemailer from "nodemailer";

export async function sendEmailService({ to, subject ,message , attachments=[]}={}) {
    
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "gmail",
    secure: false,
    auth: {
<<<<<<< HEAD
      user: process.env.SEND_EMAIL_SERVICE_MAIL,
      pass: process.env.SEND_EMAIL_SERVICE_PASS,
=======
      user: "mohamed.719.917@gmail.com",
      pass: "the password",
>>>>>>> b0567cb6b874a6c5d393f1c2d7883a15c09e984f
    },
  });

  const mailInfo = await transporter.sendMail({
    from: 'mohamed.719.917@gmail.com',
    to: to?to : "",
    subject: subject?subject : "",
    html: message?message :"",
    attachments,
  });
}
