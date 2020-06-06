const User= require('../models/user'); 


exports.getUserById = (req, res, next, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user){ //if error or no user was found
            return res.status(400).json({
                error: 'USER NOT FOUND'
            })
        }
        //if no err and user found, store the user in th fronend 'profile' variable
        //TODO: how is this shit working 
         req.profile= user; 
         next(); 
    })
}

exports.getUser= (req, res)=>{
    //for sercurity purposes, we will ommit the confidential information from the response
    req.profile.salt= undefined; 
    req.profile.encry_password= undefined; 
    //when the value is undefined, it won't even show in the respons object
    return res.json(req.profile);
}

exports.getAllUsers= (req,res)=>{
    User.find().exec((err, users)=>{
        if(err || !users){
            return res.status(400).json({
                error: 'Users not found'
            })
        }
        res.json(users);
    })
}