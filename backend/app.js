require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose'); 
const bodyParser= require('body-parser'); 
const cookieParser= require('cookie-parser'); 
const cors= require('cors');
//Routes:
const authRoute= require('./routes/auth');

const app = express()
const port = process.env.PORT || 8000; 

//DB Connection
mongoose.connect(process.env.DATABASE,  
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true //to use indexing
}).then(()=>{
    console.log('mognoDB connected');
})

//Middlewares
app.use(bodyParser.json()); //no need to require anywhere else 
app.use(cookieParser());  //no need to require anywhere else 
app.use(cors());

//My Routes      //midllewares via app.use()
app.use('/api', authRoute) //signin, signout, signup

app.get('/hello', (req,res)=> res.send('Hello Express'));

//Starting a server
app.listen(port, () => console.log(`listening at port:${port}`))