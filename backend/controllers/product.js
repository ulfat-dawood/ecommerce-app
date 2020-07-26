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
        if(err){
            return res.status(400).json({
                error: "invalid image upload"
            })
        }

        let product= new Product(fields)

        if(file.photo){
            if(file.photo.size > 3000000){ // > 3 MB
                return res.status(400).json({
                    error: 'file size is too big'
                })
            }
            product.photo.data= fs.readFileSync(file.photo.path);
            product.photo.contentType= file.photo.type
        }

        //store in DB: 
        product.save((err,product)=>{
            if(err){
                res.status(400).json({
                    error: "unable to store product to DB"
                })
            }
            res.json(product); 

        })
    })

}