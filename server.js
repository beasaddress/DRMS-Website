import express from "express";
const router = express.Router();
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//server used to send emails
const app = express();
app.use(express.static(path.resolve(__dirname, './dist')));
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    host: 'localhot',
    service: 'gmail',
    port: 5000,
    auth: {
        user: 'marco@diversityrisk.com',
        pass: process.env.EMAIL_PASS,       
    },
    authMethod: 'PLAIN',
    debug: true,
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const fullName = req.body.fullName;
    const email =  req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const company = req.body.company;
    const mail = {
        from: fullName,
        to: "marco@diversityrisk.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${fullName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Company: ${company}</p>
               <p>Message: ${message}</p>`,

    };
    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent"});
        }
    }); 
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
})