const express = require('express'); 
const router= express.Router(); 

const {getCategoryById,createCategory}= require('../controllers/category'); 
const {isSignedIn,isAuthenticated,isAdmin}= require('../controllers/auth'); 
const {getUserById}= require('../controllers/user'); //to populate the user info from req.profile

//routes params
router.param('userId', getUserById); 
router.param('catergoryId', getCategoryById); 

//routes: 

//the oder of middlewares is important 
router.post('/category/create/:userId', isSignedIn, isAuthenticated, isAdmin, createCategory)//pass user id to validate user priveleges 

module.exports= router; 