const express=require("express")
const router=express.Router()

const Content=require("../models/content")

router.get("/",async(req,res)=>{

const content=await Content.find()

res.json(content)

})

router.post("/",async(req,res)=>{

const item=new Content(req.body)

await item.save()

res.json(item)

})

router.delete("/:id",async(req,res)=>{

await Content.findByIdAndDelete(req.params.id)

res.json({message:"Deleted"})

})

module.exports=router