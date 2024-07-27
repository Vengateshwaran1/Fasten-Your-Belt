const mongoose=require('mongoose');

const address=new mongoose.Schema(
    {
        houseNo:{
            type:String,
            required:[true]
        },
        street:{
            type:String,
            required:[true]
        },
        city:{
            type:String,
            required:[true]
        },
        state:{
            type:String,
            required:[true]
        },
        country:{
            type:String,
            required:[true]
        },
        pincode:{
            type:String,
            required:[true],
            default:"India"
        }
    }
);

const userDetails=new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,
            unique:true
        },
        username:{
            type:String,
            required: [true ,"Please enter your name"]
        },
        phoneNo:{
            type:String,
            required :[true,"Phone number is necessary"]
        },
        Address:{
            type:address,
            required:[true]
        },
        password:{
            type:String,
            required:[true]
        },
        email:{
            type:String,
            required:[true]
        }
    },
    {
        timestamps:true
    }
);

const adr=new mongoose.model("adr",address);
const customer=new mongoose.model("customer",userDetails);

module.exports={adr,customer};