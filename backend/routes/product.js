const express= require('express');
const router= express.Router();

const {}= require('../controllers/product');
const {isSignedIn, isAuthenticated, isAdmin}= require('../controllers/auth');
const {getUserById}= require('../controllers/user');

module.exports= router; 