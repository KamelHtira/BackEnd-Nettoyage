const express = require("express");
const formRouter = require("./routes/mongooseRoutes")
const authRouter = require("./routes/authentificationRoutes")
const app = express()
require("./models/client")
const mongoose = require('mongoose');
app.use(express.json())
const port=5000


mongoose.connect('mongodb+srv://sourour:123456SouRour+@cluster0.iqeehhj.mongodb.net/test')
.then((res)=>{
    console.log("successfully connected to mongoDB ")
})
.catch(e=>{
    console.log("error conencting to db")
})

// Connect to the db

//routes
app.use("/auth", authRouter);
app.use("/api/v1", formRouter);

app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
});
