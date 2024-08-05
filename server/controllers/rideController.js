const {ride}=require('../models/publish.model');

exports.publishRide=async(req,res)=>{
    try{
        console.log(req.body);
        const response=await ride.create(req.body);

       return res.status(200).json({
            success:true,
            message:'Ride created successfully'});
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:error
        });
    }
};