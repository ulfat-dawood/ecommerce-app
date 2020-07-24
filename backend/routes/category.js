const express = require('express'); 
const router= express.Router(); 

const {getCategoryById}= require('../controllers/category'); 
const {isSignedIn,isAuthenticated,isAdmin}= require('../controllers/auth'); 
const {getUserById}= require('../controllers/user'); //to populate the user info from req.profile

router.param('userId', getUserById); 
router.param('catergoryId', getCategoryById); 

module.exports= router; 