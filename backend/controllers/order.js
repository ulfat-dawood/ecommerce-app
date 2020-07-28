const { Order, ProductCart } = require('../models/order'); 


exports.getOrderByID= (req, res, next, idFromParam)=>{
    Order.findById(idFromParam)
    .populate('Products.product', 'name price')
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error: 'can\'t fetch orders' 
            })
        }
        req.order= order; 
        next(); 
    })
}

exports.createOrder= (req, res)=>{
    req.body.order.user= req.profile; 
    const order= new Order(req.body.order); 

    order.save((err, order)=>{
        if(err){
            return res.status(400).json({
                error: 'unable to initiate order'
            })
        }
        res.json(order);
    })
}

exports.getAllOrders= (req,res)=>{
    
}