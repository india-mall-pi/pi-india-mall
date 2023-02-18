const express = require('express');

const app = express();

app.post('/register', (req,res)=>{
    res.send("Hello")
})

app.listen(4000);





//  piIndiaMall       username
// mongodb+srv://piIndiaMall:<password>@cluster0.gzblzac.mongodb.net/?retryWrites=true&w=majority