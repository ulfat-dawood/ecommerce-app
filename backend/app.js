const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req,res)=> res.send('Hello Express')); 
app.listen(port, () => console.log(`listening at port:${port}`))