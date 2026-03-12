const mongoose=require("mongoose")

const dealSchema=new mongoose.Schema({

brand:String,
amount:Number,
status:String,
date:String

})

module.exports=mongoose.model("Deal",dealSchema)