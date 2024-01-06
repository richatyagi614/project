const express = require("express");
const app = express();
const routes=require("./routes/AllRoutes");
const cors=require("cors");
const sha1 = require("sha1");
const a = 123;
const b = sha1(a);
console.log(b);




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());    
app.use(routes);


const Port = process.env.PORT || 8000;
app.listen(Port,()=>{
    console.log("server Running with port",Port);
})