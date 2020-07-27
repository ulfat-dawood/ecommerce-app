const Product = require('../models/product'); 
const formidable= require('formidable');
const _ = require('lodash'); 
const fs= require('fs'); //FILE SYSTEM no need to install, already built in node

exports.getProductById= (req, res, next, id)=>{
    Product.findById(id)
    .populate('category')
    .exec((err, product)=>{ //product is a mongoose object
        if(err){
            return res.status(400).json({
                error: 'Product not found'
            })
        }
        //product is a mongoose object
        //later can be used wiht mongoose functions like product.remove()
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

        //destructuring fields of product schema:
        const {name, description, price, category, stock} = fields; 
        //if any of these fields do not exist: 
        if(!name || !description || !price || !category || !stock){
            return res.status(400).json({
                error: "all fields are required"
            })
        }
        //restriction on fields : 
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

exports.getProduct=(req, res)=>{
    //send evrything to the frontend except bulk data like photo
    //which is gonna be sent in the background via another middleware
    req.product.photo= undefined; 
    return res.json(req.product)
}

//middleware for fetching the photo in the background: 
exports.getPhoto= (req, res, next)=>{
    if(req.product.photo.data){
        res.set('Content-Type', req.product.contentType); 
        return res.send(req.product.photo.data); 
    }
    next(); 
}

exports.deleteProduct= (req, res)=>{
    //get the product object which is returned by the :productId param middleware 
    let product= req.product; 
    //since product is also an object from mongoose we can use remove()
    product.remove((err,deletedProduct)=>{
        if(err){
            return res.status(400).json({
                error: 'failed to delete product'
            })
        }
        res.json({
            msg: 'product deleted successfully',
            deletedProduct
        })
    }); 
}

exports.updateProduct= (req, res)=>{
    //create a form: 
    let form= new formidable.IncomingForm();
    form.keepExtensions= true; 

    form.parse(req, (err, fields, file)=>{
        if(err){
            return res.status(400).json({
                error: "error occured while updating"
            })
        }

        
        
        let product= req.product; 
        //lodash's extend(): i think it merge the values of two obejct
        //                   or if values already exist in the send object, it updates the values of the first object from the second
        product= _.extend(product,fields)

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

exports.getAllProducts= (req, res)=>{
    Product.find()
    .select('-photp')
    .limit(8)
    .exec((err,products)=>{
        if(err){
            return res.status.json({
                error: 'Error fetching products'
            })
        }
        res.json(products); 
    })
}