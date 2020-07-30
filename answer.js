// Answer here for tasks.md
const mongoose = require("mongoose");
const Schema = new mongoose.Schema;

// Q1 Answer here...
const userSchema = new Schema({
    name:String,
    email:String,
    age:Number
})

// Q2 Answer here...
const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        lowercase:true
    },
    age:{
        type:Number,
        default:0
    }
})

// Q3 Answer here...
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
    }
})

// Q4 Answer here...
const addressSchema = new Schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})

// Q5 Answer here...
const addressSchema = new Schema({
    village:String,
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pin:Number,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})

// Q6 Answer here...
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
})

// Q7 Answer here...
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

const addressSchema = new Schema({
    village:String,
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pin:Number,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

// Q8 Answer here...
const User = mongoose.model("User",userSchema);
const Address = mongoose.model("Address",addressSchema);

//Q9 Sample folder

//Q10 Routes folder in sample folder
