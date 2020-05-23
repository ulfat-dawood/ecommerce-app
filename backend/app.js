require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose'); 
const bodyParser= require('body-parser'); 
const cookieParser= require('cookie-parser'); 
const cors= require('cors');
const app = express()
const port = process.env.PORT || 8000; 

mongoose.connect(process.env.DATABASE,  
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true //to use indexing
}).then(()=>{
    console.log('mognoDB connected');
})


app.get('/hello', (req,res)=> res.send('Hello Express')); 
app.listen(port, () => console.log(`listening at port:${port}`))