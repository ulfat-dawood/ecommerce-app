const Product = require('../models/product'); 
const formidable= require('formidable');
const _ = require('lodash'); 
const fs= require('fs'); //FILE SYSTEM no need to install, already built in node

exports.getProductById= (req, res, next, id)=>{
    Product.findById(id)
    .populate('category')
    .exec((err, product)=>{
        if(err){
            return res.status(400).json({
                error: 'Product not found'
            })
        }
        req.product= product; 
        next(); 
    })
}

exports.createProduct= (req, res)=>{
    //create a form: 
    let form= new formidable.IncomingForm();
    form.keepExtensions= true; 

    form.parse(req, (err, fields, file)=>{
        if(err)
    })

}