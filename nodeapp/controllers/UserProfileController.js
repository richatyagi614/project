const routes = require("express").Router();
const jwt = require("jsonwebtoken")
const User = require("../models/User")

routes.get("/",async(req,res)=>{
    let token = req.headers.authorizaion;
    
    let obj =jwt.decode(token,"hello");
    
    let _id = obj._id;

    let result = await User.find({_id : _id})
  res.send({success: true, result : result[0]});
})

module.exports = routes;