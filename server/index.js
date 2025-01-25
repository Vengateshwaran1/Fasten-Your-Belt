require('dotenv').config(); // Correctly require and configure dotenv
const express = require('express');
const mongoose = require('mongoose');
const { customer } = require('./models/users.model.js');
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes.js');
const loginRoute = require('./routes/loginroutes.js');
const rideRoute = require('./routes/rideRoute.js');
const searchRoute = require('./routes/searchRoutes');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT; // Ensure PORT is defined in your .env file
const mongoURL=process.env.MONGODB;

app.use(express.json()); // Middleware for sending JSON
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Server for fasten your belt");
});

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173'], // Allow requests from React client
    credentials: true,
}));

// Route handlers
app.use('/api', authRoutes);
app.use('/api', otpRoutes);
app.use('/api', loginRoute);
app.use('/api', rideRoute);
app.use('/api', searchRoute);
//console.log('Environment Variables:', process.env);
// MongoDB connection
console.log('MONGODB_URI:',process.env.MONGODB ); // Add this line to debug

mongoose.connect(process.env.MONGODB)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Some error occurred", err); // Log the error for debugging
    });
