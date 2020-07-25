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

//Controllers: 
exports.createCategory= (req, res)=>{
    const catergory= new Catergory(req.body); 
    catergory.save((err, catergory)=>{
        if(err){
            return res.status(400).json({
                error: "failed to create category"
            })
        }
        res.json({catergory}); 
    })
}

//since there is :categoryId the all category info stored in req.catergory
exports.getCategory= (req, res)=>{
    res.json(req.catergory); 
}

exports.getAllCategory= (req, res)=>{
    Catergory.find().exec(err,categories =>{
        if(err){
            return res.status(400).json({
                error: "categories not found"
            })
        }
        res.json(categories);
    })
}

exports.updateCategory= (req,res)=> {
    const category= req.category; 
    category.name= req.body.name; 

    category.save(err,updatedCate=>{
        if(err){
            return res.status(400).json({
                error: "failed to update categories"
            })
        
        res.json(updatedCate); 
        }
       
    });


}

exports.removeCategory= (req, res)=>{
    const category= req.category; 

    category.remove((err, category)=>{
        if(err){
            return res.status(400).json({
                error: 'unable to delete category'
            })
        }
        res.json({
            msg: `Successfully Deleted ${category.name}`
        })
    })
}