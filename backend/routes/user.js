const express = require('express'); 
const router= express.Router(); 

const {getUserById, getUser ,updateUser}= require('../controllers/user');
const {isSignedIn, isAuthenticated, isAdmin}= require('../controllers/auth');

router.param('userId', getUserById); //on any rout that uses the param :userId,
                                     //middleware getUserById will be fired 

router.get('/user/:userId',isSignedIn,isAuthenticated, getUser);
router.put('user/:userId', isSignedIn, isAuthenticated, updateUser);


module.exports= router; 