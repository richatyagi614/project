const routes=require("express").Router();
const City = require("../models/City")



routes.get("/State",async(req,res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

routes.get("/getcity/:a", async(req,res)=>{
    console.log(req.params)
    // return;
    let x = req.params.a
        let result = await City.find({state : x})
        res.send(result);
    })
module.exports=routes;