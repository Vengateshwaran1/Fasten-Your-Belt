const express=require('express');
const logincontrol=require('../controllers/loginController');

const router=express.Router();

router.post('/login',logincontrol.login);

module.exports=router;