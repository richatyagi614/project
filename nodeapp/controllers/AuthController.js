const routes= require("express").Router();
const User = require("../models/User");
const sha1= require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async(req,res)=>{
    let {  username, password } = req.body;
let result = await User.find({email : username});
if(result.length==1)
{
    if(result[0].password == sha1(password))
    {
        let obj ={_id : result[0]._id};
        let token = jwt.sign(obj,"hello");
        
       res.send({success : true,token :token});
    }else{
        res.send({success : false,type :2})
    }
}
else{
    res.send({success :false,Type : 1})
}

})

module.exports = routes;