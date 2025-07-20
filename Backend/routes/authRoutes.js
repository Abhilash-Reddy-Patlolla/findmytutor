const express = require('express');
const { userSignup, userLogin } = require('../controllers/authController');

const router = express.Router();

// Register
router.post('/signup',userSignup );

// Login
router.post('/login',userLogin);

module.exports = router;
