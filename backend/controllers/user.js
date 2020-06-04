const User= require('../models/user'); 


exports.getUserById = (req, res, next, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user){ //if error or no user was found
            return res.status(400).json({
                error: 'USER NOT FOUND'
            })
        }
        //if no err and user found, store the user in th fronend 'profile' variable
         req.profile= user; 
         next(); 
    })
}

exports.getUser= (req, res)=>{
    return res.json(req.profile);
}