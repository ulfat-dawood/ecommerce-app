const express= require('express');
const router= express.Router();

const {getProductById}= require('../controllers/product');
const {isSignedIn, isAuthenticated, isAdmin}= require('../controllers/auth');
const {getUserById}= require('../controllers/user');

//param middleware: 
router.param('userId', getUserById);
router.param('peroductId', getProductById)

module.exports= router; 