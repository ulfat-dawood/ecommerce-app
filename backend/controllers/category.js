const Catergory= require('../models/category');

//define the Param controller: 
exports.getCategoryById= (req, res, next, id)=>{

    Catergory.findById(id).exec((err,Catergory)=>{
        
    })

    next();
}