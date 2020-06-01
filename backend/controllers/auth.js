const {check, validationResult}= require('express-validator');
const jwt= require('jsonwebtoken'); 
const expressJwt= require('express-jwt'); 

const secretString= process.env.SECRET; 
//import models:
const User= require('../models/user'); 



//export the module signout : 
exports.signup = (req, res)=>{

    //the request will pass the express-validator middleware first then come here
    //errors returns json object that has error as an array 
    const errors= validationResult(req);

    //if errors array is not empty
    if(!errors.isEmpty()){
        //stop the function execution using return
        return res.status(422).json({
            field: errors.array()[0].param,
            error: errors.array()[0].msg //convert the json value to js array
        })
    }
    const user= new User(req.body);
    
    user.save((err, theSavedUserObj)=>{
        if(err){
            console.log(err); 
            return res.status(400).json({
                error: 'Not able to save user in db'
            });//400=bad request
        }
        res.json({
            name:theSavedUserObj.name,
            email: theSavedUserObj.email,
            id: theSavedUserObj._id
        });
    }); 
}

exports.signin = (req, res)=>{
    const {email, password}= req.body; 
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            field: errors.array()[0].param,
            error: errors.array()[0].msg //convert the json value to js array
        })
    }

    User.findOne({email:email}, (err, user)=>{
        //if email not found:
        if(err || !user){
            return res.status(400).json({
                error: 'Email does not exist'
            })
        }
        //if password not match
        if(!user.autheticate(password)){ 
            return res.status(401).json({
                error: 'Email and Password don\'t match' 
            })
        }
        //email found + password matched=> generate token based on _id
        const token= jwt.sign({id: user._id} , secretString); 

        //store token in the browser cookie: 
        //3 param: name of the cookie field/ value of the cookie, expiry 
        res.cookie('token', token, {expire: new Date() + 9999}); 

        //send to the fornend:
        //user info + token to be stored in local storage
        const {_id, email, name, role}= user; //destruturing
        return res.json({
            token, //shorthand for token:token 
            user: {_id, email, name, role}
        })
    })

}

exports.signout = (req, res)=>{
    //clear the 'token' cookie: 
    res.clearCookie('token');
    res.json({
        msg:'You have been signed out!'
    })
}


//Middlewares for protected routes  
exports.isSignedIn= expressJwt({
    secret: secretString,
    userProperty: 'auth'
     //no need for next() in this middleware, because expressJwt already has it
})
//Custom middlewares for protected routes  
exports.isAuthenticated= (req, res, next)=>{
    //in the frontend create a property 'profile' that is sent with the req
    //first check if profile & auth exist then check if _id matches 
    let checker= req.profile && req.auth && req.profile._id === req.auth._id; //auth is coming from isSignedIn() 
    if(!checker){
        return res.status(403).json({
            error: 'ACCESS DENIED'
        })
    }
    next();
}

exports.isAmin= (req, res, next)=>{

    if(req.profile.role === 0){ 
        return res.status(403).json({
            error: 'You are not an admin'
        })
    }

    next();
}