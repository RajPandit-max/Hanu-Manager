const mongoose=require("mongoose")

const contentSchema=new mongoose.Schema({

title:String,
date:String,
status:String

})

module.exports=mongoose.model("Content",contentSchema)