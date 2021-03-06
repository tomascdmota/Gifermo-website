const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port: 587,
    auth:{
        user: 'summer.vandervort@ethereal.email',
        pass: 'PsJDQjsgrN3FqsKvTu'
    },
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

router.post("/server", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "geral@gifermo.com",
        subject: "Test",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    
    await contactEmail.sendMail(mail, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.json({status: "Sent"});
            
        }
    })
});


//Exports the code in the whole file
module.exports = router;