const {customer}=require('../models/users.model.js');
const OTP=require('../models/otp.model');

exports.login=async(req,res)=>{
    console.log(req.body.email);
    const {email,password,otp}=await req.body;
    try{
     //otp checking   
    const response=await OTP.find({email}).sort({createdAt:-1}).limit(1);
    if(response.length===0 ||otp!== response[0].otp){
        return res.status(400).json({
            success:false,
            message:'The OTP is not valid'
        });
    }
    else{
        //user password checking
        const user=await customer.findOne({email:req.body.email});
        if(user){
            if(req.body.password===user.password){
                try{
                await customer.updateOne({email:req.body.email},
                    {
                        $set:{
                            isLogin:true
                        }
                    }
                );
                return res.status(200).json({
                    success:true,
                    message:'Logged in successfully'
                });
            }
            catch(error){
                return res.status(501).json({
                    success:false,
                    message:error
                });
            }
            }      
            else{
                return res.status(500).json({
                    success:false,
                    message:'Password incorrect'
                })
            } 

        }
        else{
            return res.status(400).json({
                success:false,
                message:"User doesn't exist"
            })
        }
    }
    }
    catch(error){
        res.status(400).json({error});
    }
};