const express= require('express'); 
const router= express.Router(); 

const{getOrderByID}= require('../controllers/order'); 
const {isSignedIn, isAuthenticated, isAdmin}= require('../controllers/auth');
const {getUserById}= require('../controllers/user');

//param middlwares:
router.param('orderId', getOrderByID); 


module.exports= router; 