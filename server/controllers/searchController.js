const {ride}=require('../models/publish.model.js');

exports.searchRide=async(req,res)=>{
    from_location=req.body.from;
    to_location=req.body.to;

    console.log(from_location);
    console.log(to_location);

    try{
        const avai_rides=await ride.aggregate(
            [{
            $match:
            {from:from_location,
            to:to_location
            }
        }
         ]).exec();
        if(avai_rides){
            console.log(avai_rides)
            return res.json({avai_rides});
        }
        else{
            return res.json({
                message:'No rides available'
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:JSON.stringify(error)
        });
    }
};