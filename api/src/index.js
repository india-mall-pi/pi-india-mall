const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

mongoose.set("strictQuery", false );

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.get('/test', (req,res)=>{
    res.send("Hello")
})

app.listen(4000);








