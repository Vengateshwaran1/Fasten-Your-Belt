const mongoose=require('mongoose');


const userDetails=new mongoose.Schema(
    {
        username:{
            type:String,
            required: [true ,"Please enter your name"]
        },
        phoneNo:{
            type:String,
            required :[true,"Phone number is necessary"]
        },
       dob:{
        type:Date,
        required:[true]
       },
        password:{
            type:String,
            required:[true]
        },
        email:{
            type:String,
            required:[true]
        },
        isLogin:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
);
const customer=new mongoose.model("customer",userDetails);

module.exports={customer};