const mongoose=require("mongoose")

const paymentSchema=new mongoose.Schema({

brand:String,
amount:Number,
status:String

})

module.exports=mongoose.model("Payment",paymentSchema)