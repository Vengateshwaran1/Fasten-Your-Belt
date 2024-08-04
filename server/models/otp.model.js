//creating a database for OTP

const mongoose=require('mongoose');
const mailSender=require('../utils/mailSender');

const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:60 *5 //The otp time limit is 5 minutes
    }
});

async function send_otp(email,otp){
    try{
        const mailResponse=await mailSender(
            email,
            "Verification email",
            `<h1> Please confirm your OTP</h1>
            <p>Your OTP for logging in to Fasten Your Belt is ${otp}</p>`
        );
        console.log("Email sent successfully:",mailResponse);
    }
    catch(error){
        console.log("Error occured while sending mail:",error);
        throw error;
    }
}

otpSchema.pre("save",async function (next){
    console.log("New document saved to database");
    if(this.isNew){
        await send_otp(this.email,this.otp);
    }
    next();
});

module.exports=mongoose.model("OTP",otpSchema);