const mongoose = require("mongoose");

const Schema = new mongoose.Schema;

const userSchema = new Schema({
    name:String,
    password:{
        type:String,
        minlength:5
    },
    email:{
        type:String,
        lowercase:true
    },
    age:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    favorites:[String]
},{timestamps:true})

const User = mongoose.model("User",userSchema);
module.exports = User;