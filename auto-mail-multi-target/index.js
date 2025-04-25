// Auto-Mail Multi-Target
// Designed by programmer Daniel Crema

// This software sends e-mails automatically to multiple addresses
// It uses JSON objects to ensure security

const nodemailer = require("nodemailer");

const data = require('./secrets.json');
const user = data.user;
const pass = data.pass;
const from = data.from;
const subject = data.subject;
const html = data.html;

console.log('user => ', user);
console.log('pass => ', pass);
console.log('from => ', from);
console.log('subject => ', subject);
console.log('html => ', html);

const emailList = data.emailList
const emailsArray = [];
console.log('emailList => ', emailList);

for (const key in emailList) {
    if (emailList.hasOwnProperty(key)) {
        emailsArray.push(emailList[key]);
    }
}
console.log('emailsArray => ', emailsArray);

async function sendEmails(emailsArray) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, // Gmail port
        secure: true,
        auth: {
            user: user,
            pass: pass,
        }
    });

    for (const email of emailsArray) {
        try {
            await transporter.sendMail({
                from: from,
                to: email, // Use the current email in the loop
                subject: subject,
                html: html,
            });
            console.log(`Email sent to: ${email}`);
        } catch (err) {
            console.log(`Failed to send email to: ${email}`);
            console.error(err);
        }
    }
}

sendEmails(emailsArray)
    .then(() => {
        console.log("All emails sent successfully.");
    })
    .catch((err) => {
        console.log("Error sending emails:", err);
    });