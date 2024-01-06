require("mongoose").connect("mongodb://0.0.0.0:27017/project").then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("DB NOT-----connected",);
})