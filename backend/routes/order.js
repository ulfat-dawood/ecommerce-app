const express= require('express'); 
const router= express.Router(); 

const {getOrderByID,createOrder, getAllOrders,getOrderStatus, updateStatus}= require('../controllers/order'); 
const {isSignedIn, isAuthenticated,isAdmin}= require('../controllers/auth');
const {getUserById, pushOrderInPurchaseList}= require('../controllers/user');
const {updateStock}= require('../controllers/product'); 

//param middlwares:
router.param('orderId', getOrderByID); 
router.param('userId', getUserById);

//actual routes: 
router.post('/order/create/:userId',isSignedIn,isAuthenticated,pushOrderInPurchaseList, createOrder ); 

       //here we need :userId to pass req.profile to the authentocation middlewares: 
router.get('/order/all/:userId',isSignedIn,isAuthenticated,isAdmin, getAllOrders);

        //letting only admin to get/update the status: 
router.get('/order/status/:userId',isSignedIn,isAuthenticated,isAdmin,getOrderStatus);
router.put('/order/:orderId/status/:userId',isSignedIn,isAuthenticated,isAdmin, updateStatus)

module.exports= router; 