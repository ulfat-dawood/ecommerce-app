const express= require('express'); 
const router= express.Router();
const {check, validationResult}= require('express-validator');
//modules of controllers: 
const {signout,signup, signin, isSignedIn }= require('../controllers/auth'); 

router.post('/signup',[
check('name').isLength({min: 5}).withMessage('name should be at least 3 char') ,
check('email').isEmail().withMessage('email is required'),
check('password').isLength({min: 5}).withMessage('password should be at least 3 char') 

], signup)

router.post('/signin',[
    check('email').isEmail().withMessage('email is required'),
    check('password').isLength({min: 1}).withMessage('password is required') 
    
    ], signin)
    

//pass the middleware CBF signout(): 
router.get('/signout', signout)

//Middleware for protected routes
router.get('/test', isSignedIn, (req, res)=>{
    return res.json(req.auth)
   
}); 

module.exports= router;