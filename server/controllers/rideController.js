const {ride}=require('../models/publish.model');

exports.publishRide=async(req,res)=>{
    try{
        console.log(req.body);
        const rideDetails={
            name:req.body.name,
            PhoneNumber:req.body.PhoneNumber,
            carNumber:req.body.carNumber,
            carModel:req.body.carModel,
            dor:req.body.dor,
            from:req.body.from.toLowerCase(),
            to:req.body.to.toLowerCase(),
            img:req.body.img
        };
        const response=await ride.create(rideDetails);

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