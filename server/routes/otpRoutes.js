const express=require('express');
const otpcon=require('../controllers/otpController');

const router=express.Router();

router.post('/send-otp',otpcon.sendOTP);

module.exports=router;