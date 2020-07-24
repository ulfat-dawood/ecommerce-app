const Catergory= require('../models/category');

//define the Param controller: 
exports.getCategoryById= (req, res, next, id)=>{

    Catergory.findById(id).exec((err,Catergory)=>{
        if(err){
            return res.status(400).json({
                err: 'category not found in db'
            })
        }
        req.catergory= catergory; 
        next();
    })

    next();
}