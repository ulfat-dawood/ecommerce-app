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

       //here we need :userId to pass req.profile to the authentocation middlewares: 
router.get('/order/all/:userId',isSignedIn,isAuthenticated,isAdmin, getAllOrders);

router.get('/order/status/:userId');
        //admin will update the status: 
router.put('/order/:orderId/status/:userId')
module.exports= router; 