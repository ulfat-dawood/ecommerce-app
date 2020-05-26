require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose'); 
const bodyParser= require('body-parser'); 
const cookieParser= require('cookie-parser'); 
const cors= require('cors');

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
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes      //midllewares via app.use()
app.use('/api', authRoute)

app.get('/hello', (req,res)=> res.send('Hello Express'));

//Starting a server
app.listen(port, () => console.log(`listening at port:${port}`))