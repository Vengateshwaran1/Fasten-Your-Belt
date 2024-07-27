const express =require('express');
const mongoose=require('mongoose');
const {adr,customer}=require('./users.model.js');

const app=express()

app.use(express.json()); //a middleware for sending json

app.get('/',(req,res)=>{
    res.send("Testing out node secondly");
});

app.post('/login',async(req,res)=>{
    try{
        const user=await customer.create(req.body);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

mongoose.connect("mongodb+srv://vad:carPool101@carpool.qy9xda4.mongodb.net/cp?retryWrites=true&w=majority&appName=Carpool")
.then(()=>{
    app.listen(3000,() =>{
        console.log("Server is running on port 3000")
    });
    console.log("Connected to mongoDB");
})
.catch(()=>{
    console.log("Some error occured")
});




