const express = require('express');
const app = new express();
const router = require('./src/routes/api')

//security Middleware Import
const rateLimit = require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors')
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

//security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(bodyParser.json())
//Request Rate Limit
const limiter = rateLimit({
    windowMs: 15* 60 * 1000,
    max: 100,
})
app.use(limiter)





//mongodb Database connection

let URI ="mongodb+srv://devasif:devasif1234@cluster0.pbqyg.mongodb.net/"
let options = { user: "",};

mongoose.connect(URI, options)
    .then(() => console.log("Connected successfully"))
    .catch(error => console.error("Connection error:", error));




app.use(express.json());
app.use('/api/v1',router)


//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"});
});



module.exports = app;

