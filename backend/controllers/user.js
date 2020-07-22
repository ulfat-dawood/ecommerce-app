const User= require('../models/user'); 
const Order= require('../models/order'); 

//this middleware is fired every time there's :userId in the rout
//this middleware will store all the user info in req.profile
exports.getUserById = (req, res, next, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user){ //if error or no user was found
            return res.status(400).json({
                error: 'USER NOT FOUND'
            })
        }
        //if no err and user found, store the user in req.profile
         req.profile= user; 
         //if route has :userId param, it has req.profile
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

exports.updateUser=((req, res)=>{
    User.findByIdAndUpdate(
        {_id: req.profile.id}, 
        {$set: req.body},
        {new:true, useFindAndModify:false},
        (err, user)=>{
            if(err){
                return res.status(400).json({
                    error: "you are not authorized to update this information"
                })
            }
            user.salt= undefined;
            user.encry_password= undefined;
            res.json(user)
        }
    )
})

exports.userPurchaseList=((req, res)=>{
  Order.find({user : req.profile._id}).populate('user', 'id name')//model, return field separed by space
  .exec((err,order)=>{
      if(err){
          return res.status(400).json({
              error:'no orders for this user'
            })
        }
      return res.json(order)
  })
})

//this is a middleware
//whenever user places any order this middleware will push it to the purchases list
exports.pushOrderInPurchaseList= (req,res,next)=> {
    let purchases= [];
    req.body.order.product.forEach(product =>{
        const {_id, name,description, category, quantity}= product
        purchases.push({
            _id,
            name, 
            description,
            category,
            quantity,
            amount: req.body.order.amount,
            transaction_id: req.body.order.transaction_id
        })
    })

    //store the purchases array in the User model: 
    User.findOneAndUpdate(
        {_id:req.profile._id}, 
        {$push: {purchases:purchases}},
        {new:true},// this flag means in the return object, send me the updated one
        (err,purchases)=> {
            if(err){
                return res.status(400).json({
                    err: "unable to save purchases list"
                })
            }
            next();
        }
    )
    
}