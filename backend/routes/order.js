const express= require('express'); 
const router= express.Router(); 

const{getOrderByID}= require('../controllers/order'); 
const{updateStock}= require('../controllers/product');
const {isSignedIn, isAuthenticated, isAdmin}= require('../controllers/auth');
const {getUserById, pushOrderInPurchaseList}= require('../controllers/user');

//param middlwares:
router.param('orderId', getOrderByID); 
router.param('userId', getUserById);
router.param('peroductId', getProductById)

module.exports= router; 