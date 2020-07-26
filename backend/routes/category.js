const express = require('express'); 
const router= express.Router(); 

const {getCategoryById,createCategory,getCategory,getAllCategory,updateCategory,removeCategory}= require('../controllers/category'); 
const {isSignedIn,isAuthenticated,isAdmin}= require('../controllers/auth'); 
const {getUserById}= require('../controllers/user'); //to populate the user info from req.profile

//routes params
router.param('userId', getUserById); 
router.param('categoryId', getCategoryById); 

//routes: 
router.get('/category/:caterogyId', getCategory)
router.get('/categories', getAllCategory)

//only signedin authenticated admin can create/update/remove
//the oder of middlewares is important
router.post('/category/create/:userId', isSignedIn, isAuthenticated, isAdmin, createCategory)//pass user id to return req.catergory from the param middleware
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin,updateCategory);

router.delete(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
  );
  
module.exports= router;