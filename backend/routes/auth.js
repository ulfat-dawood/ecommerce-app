const express= require('express'); 
const router= express.Router();
//modules of controllers: 
const {signout,signup }= require('../controllers/auth'); 

router.post('/signup', signup)

//pass the middleware CBF signout(): 
router.get('/signout', signout)

module.exports= router; 