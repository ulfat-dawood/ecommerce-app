const express = require('express'); 
const router= express.Router(); 

const {getUserById, getUser ,updateUser,userPurchaseList}= require('../controllers/user');
const {isSignedIn, isAuthenticated, isAdmin}= require('../controllers/auth');

router.param('userId', getUserById); //on any rout that uses the param :userId,
                                     //middleware getUserById will be fired 
                                     //this middleware will store all the user info in req.profile

router.get('/user/:userId',isSignedIn,isAuthenticated, getUser);
router.put('/user/:userId', isSignedIn, isAuthenticated, updateUser)

router.get('/orders/user/:userId', isSignedIn, isAuthenticated, userPurchaseList)

module.exports= router; 