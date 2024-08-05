const bcrypt=require('bcrypt');
const {customer}=require('../models/users.model');
const OTP=require('../models/otp.model');

exports.signup=async(req,res)=>{
    try{
        console.log(req.body);
        const newUser=await customer.create(req.body);

        return res.status(201).json({                       
            success:true,
            message:'User registered sucessfully',
            user:newUser
        });
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            error:error.message
        });
    }
};