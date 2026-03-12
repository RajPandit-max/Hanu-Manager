const mongoose=require("mongoose")

const brandSchema=new mongoose.Schema({

name:String,
email:String,
dealAmount:Number,
status:String

})

module.exports=mongoose.model("Brand",brandSchema)