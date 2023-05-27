const mongoose = require("mongoose")

const nameschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true})

const namemodel = new mongoose.model("name",nameschema)

module.exports = namemodel