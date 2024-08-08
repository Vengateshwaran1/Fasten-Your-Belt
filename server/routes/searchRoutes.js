const express=require('express');
const search=require('../controllers/searchController');

const router=express.Router();

router.post('/search',search.searchRide);

module.exports=router;
