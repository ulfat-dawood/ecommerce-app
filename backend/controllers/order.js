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
    Order.find()
        .populate('user', '_id name')
        .exec((err,orders)=>{
            if(err){
                return res.status(400).json({
                    error: 'orders not found'
                })
            }
            res.json(orders)
        })
}

exports.getOrderStatus = (req, res)=>{
    res.json(Order.schema.path('status').enumValues )
}

exports.updateStatus=(req,res)=>{
    Order.update(
        {_id: req.body.orderId}, 
        {$set: {status: req.body.status}},
        (err,UpdatedOrder)=>{
            if(err){
                return res.status(400).json({
                    error: 'unable to updated status'
                })
            }
            res.json(UpdatedOrder); 
        }

    )
}