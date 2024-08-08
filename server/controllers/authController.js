const bcrypt=require('bcrypt');
const {customer}=require('../models/users.model');
const OTP=require('../models/otp.model');

exports.signup=async(req,res)=>{
    try{
        console.log(req.body);
        current_mail=req.body.email;
        const checkUserPresent=await customer.findOne({current_mail});
        if(!checkUserPresent){
        const newUser=await customer.create(req.body);

        try{
            await customer.updateOne({email:req.body.email},
                {
                    $set:{
                        isLogin:true
                    }
                }
            );
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:error
            });
        }
        return res.status(201).json({                       
            success:true,
            message:'User registered sucessfully',
            user:newUser
        });
    }
    else{
        return res.status(500).json({
            success:false,
            message:'A user is already registered under this email'
        })
    }
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            error:error.message
        });
    }
};