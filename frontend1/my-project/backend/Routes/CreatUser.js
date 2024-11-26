const express = require("express");
const router = express.Router()
const user=require('../models/user');
const { Router, Routes } = require("react-router-dom");

router.post("/creatuser",async(req,res)=>
{
try{
  await  user.create(
        {
            name:"ram",
            password:"123456",
            email:"archittomar2024@gmail.com",
            location:"indore"
        }
    )
    res.json({success:true});
}
catch(error){
console.log (error)
res.json({success:false});
}

})
module.exports =Routes;
