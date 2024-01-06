require ("../config/db");

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const AdminSchema = mongoose.Schema({
    
    username : "string",
    password:"string"
})

module.exports= mongoose.model("Admin",AdminSchema);