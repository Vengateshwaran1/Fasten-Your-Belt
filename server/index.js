const express =require('express');
const mongoose=require('mongoose');
const {customer}=require('./models/users.model.js');
const authRoutes=require('./routes/authRoutes');
const otpRoutes=require('./routes/otpRoutes.js');
const loginRoute=require('./routes/loginroutes.js');
const rideRoute=require('./routes/rideRoute.js');
const searchRoute=require('./routes/searchRoutes')
const cors=require('cors');

const app=express()

app.use(express.json()); //a middleware for sending json
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Server for fasten your belt");
});

app.use(cors({
    origin: ['http://localhost:5173'], // Allow requests from React client
    credentials: true,
 }));

app.use('/api', authRoutes);
app.use('/api', otpRoutes);
app.use('/api',loginRoute);
app.use('/api',rideRoute);
app.use('/api',searchRoute);

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




