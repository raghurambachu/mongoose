const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const userRoute = require("./routes/users")

mongoose.connect("mongodb://localhost:27017/sampleuser",{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true},(err)=>console.log("Connected",err ? err : true))

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/users",userRoute);






app.listen(PORT,() => console.log("Server successfully started at port: "+ PORT))