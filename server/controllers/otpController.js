//checking if user is already present.If not send OTP

const otpGenerator=require('otp-generator');
const OTP=require('../models/otp.model.js');
const {customer} =require('../models/users.model.js'); 

exports.sendOTP=async(req,res)=>{
    try{
        console.log(req.body);
        const {email}=req.body;
        const checkUserPresent=await customer.findOne({email}); //check if user has already signed up
        if(checkUserPresent){
        let otp=otpGenerator.generate(6,{
            upperCaseAlphabets : false,
            lowerCaseAlphabets:false,
            specialChars:false
        });
        const otpPayload={email,otp};
        const otpBody=await OTP.create(otpPayload);
        console.log(otp);
        res.status(200).json({
            success:true,
            message:'OTP sent successfully',
            otp,

        });
        }
        else{
            return res.status(401).json({
                success:false,
                message:'No such user.Please Signup'
            });
        }
    //a function which should take email as parameter and verify otp
    //return res.redirect(`/verify?email=${encodeURIComponent(email)}`);
    }catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            error:error.message
        });
    }
};