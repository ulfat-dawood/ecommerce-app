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