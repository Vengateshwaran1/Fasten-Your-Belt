const mongoose=require('mongoose');

const publishRide=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        PhoneNumber:{
            type:String,
            required:true
        },
        carNumber:{
            type:String,
            required:true
        },
        carModel:{
            type:String,
            required:true
        },
        dor:{
            type:Date,
            required:true
        },
        from:{
            type:String,
            required:true
        },
        to:{
            type:String,
            required:true
        },
        img:{
            data:Buffer,
            contentType:String
        }
    },
    {
        timestamps:true
    }
);

const ride=new mongoose.model("ride",publishRide);
module.exports={ride};
