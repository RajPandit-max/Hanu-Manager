const express=require("express")
const router=express.Router()

const Payment=require("../models/Payment")

router.get("/",async(req,res)=>{

const payments=await Payment.find()

res.json(payments)

})

router.post("/",async(req,res)=>{

const payment=new Payment(req.body)

await payment.save()

res.json(payment)

})

router.put("/:id",async(req,res)=>{

await Payment.findByIdAndUpdate(req.params.id,req.body)

res.json({message:"Payment updated"})

})

module.exports=router