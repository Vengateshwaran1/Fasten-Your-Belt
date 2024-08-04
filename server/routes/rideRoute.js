const express=require('express');
const publishride=require('../controllers/rideController');

const router=express.Router();

router.post('/publishRide',publishride.publishRide);
module.exports=router;
