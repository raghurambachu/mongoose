const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register",(req,res,next) => {
    User.create(req.body,(err,user) => {
        res.status(201).json(user);
    })
})

router.get("/:id",(req,res,next) => {
    const _id = req.params.id;
    // By Find Method [always returns an array]
    User.find({_id},(err,usersArr) => {
        res.render("index",{user:usersArr[0]})
    })

    // By findOne method[Returns an user document]
    User.findOne({_id},(err,user) => {
        res.render("index",{user});
    })
    
    // By FindById method[returns an user document]
    User.findById(_id,(err,user) => {
        res.render("index",{user}); 
    })
})

router.put("/:id",(req,res,next) => {
    const _id = req.params.id;
    // Update method
    User.update({_id},req.body,(err,user) => {
        res.render("index",{user})
    });
    
    // UpdateOne method
    User.updateOne({_id},req.body,(err,user) => {
        res.render("index",{user})
    })

    // FindbyId and update
    User.findByIdAndUpdate(_id,req.body,(err,user) => {
        res.render("index",{user});
    })
})


router.delete("/:id",(req,res,next) => {
    const _id = req.params.id;
    User.findByIdAndDelete(_id,(err,user) =>{
        res.send("User deleted successfully");
    })
})



module.exports = router;