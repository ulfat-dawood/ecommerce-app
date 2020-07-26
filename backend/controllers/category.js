const Category= require('../models/category');

//Param middleware: 
exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
      if (err) {
        return res.status(400).json({
          error: "Category not found in DB"
        });
      }
      req.category = cate;
      next();
    });
  };

//Controllers: 
exports.createCategory= (req, res)=>{
    const Category= new Category(req.body); 
    Category.save((err, Category)=>{
        if(err){
            return res.status(400).json({
                error: "failed to create category"
            })
        }
        res.json({Category}); 
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

exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
  
    category.save((err, updatedCategory) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update category"
        });
      }
      res.json(updatedCategory);
    });
  };


  exports.removeCategory = (req, res) => {
    const category = req.category;
  
    category.remove((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this category"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
  };