const express= require('express'); 
const router= express.Router(); 

const {getOrderByID,createOrder, getAllOrders}= require('../controllers/order'); 
const {isSignedIn, isAuthenticated,isAdmin}= require('../controllers/auth');
const {getUserById, pushOrderInPurchaseList}= require('../controllers/user');
const {updateStock}= require('../controllers/product'); 

//param middlwares:
router.param('orderId', getOrderByID); 
router.param('userId', getUserById);

//actual routes: 
router.post('/order/create/:userId',isSignedIn,isAuthenticated,pushOrderInPurchaseList, createOrder ); 

router.get('/order/all/:userId',isSignedIn,isAuthenticated,isAdmin, getAllOrders)
module.exports= router; 