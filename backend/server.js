const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});
