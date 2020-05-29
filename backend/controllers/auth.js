const User= require('../models/user'); 



//export the module signout : 
exports.signup = (req, res)=>{
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

exports.signout = (req, res)=>{
    console.log('out')

    res.json({name: 'hola', age: 16});
}
