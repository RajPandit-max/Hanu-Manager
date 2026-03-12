const express=require("express")
const router=express.Router()

const Deal=require("../models/Deal")

router.get("/",async(req,res)=>{

const deals=await Deal.find()

res.json(deals)

})

router.post("/",async(req,res)=>{

const deal=new Deal(req.body)

await deal.save()

res.json(deal)

})

module.exports=router