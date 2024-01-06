require ("../config/db");

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const CitySchema = mongoose.Schema({
    id : "string",
    name : "string",
    state :"string"
},{collection:"city"});

module.exports= mongoose.model("city",CitySchema);