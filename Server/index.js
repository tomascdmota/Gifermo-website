const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const Mail = require("nodemailer/lib/mailer");

// Routes 
const routes = require('./routes');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json({limit: "50mb"}))
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use("/", routes);
app.use(express.urlencoded({extendewd: true}));
app.listen(3001, () => console.log("Server running"));



