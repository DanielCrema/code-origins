# Auto-Mail Multi-Target 🎓🚀
My first "*Hello World*" at Javascript backend using `Node.js` 🎉

First time I have managed to develop a functional *backend* system, a simple *API* based mail sender using **Nodemailer** library. By that time I didn't know about readme.md, so the readme was .txt, which I'll leave in the bottom of this readme as a memorial.

## Dates 👨‍💻🗓️
🗝️ *First commit*

- Aug 4, 2023

🔐 *Last commit*

- Aug 4, 2023 (2 commits only)

## 🛠️ Stack
[Javascript - Node.js](https://nodejs.org/en) – Javascript backend runtime environment.

[Nodemailer](https://nodemailer.com/) – Library to send emails.

## 🎓 Credits
Developed by [**Daniel Crema**](https://github.com/DanielCrema) as a study case for educational purposes.

*Special thanks* to:  
🕋🤲 **Almighty God** (ﷻ), for having given me intelligence and persistence to learn.

Then:
- [David Palis Neto](https://github.com/dpalisn), for his friendship and support during the development process.

### 📝 Memorial: Original readme.txt
-------

```Auto-Mail Multi-Target
Designed by programmer Daniel Crema

This software sends emails automatically to multiple addresses
It uses JSON objects to ensure security

How to use it:

=> First of all, check if you have nodejs installed in your machine
if so, you should install nodemailer through the terminal
-> Through the terminal, input "npm init" and then input "npm install nodemailer"

=> Now let's configure your email
-> Create an archive named secrets.json
-> Paste this form inside the archive secrets.json as follows:

{
    "user": "youremail@yourserver.com",
    "pass": "yourpassword",
    "from": "Your Name <youremail@yourserver.com>",

    "subject": "Your Email Subject",
    "text": "Your email content",
    "html": "Your html content",

    "emailList": {
        "email1": "emailadress@server.com",
        "email2": "otheremailadress@server.com"
    }
}

-> Fill your information as in the examples. Pay attention not to delete any quote or code part
=> To run the code, go on your terminal and input 'node index.js'


* NOTE: This code is designed to send emails from a gmail account.
If you use another email service, you will need to find the code below at index.js and edit it
with your email service host, port, and SSL security information.

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

}

Do notice that your email service may ask for security checks and
other procedures in order to give access to your script.```