const express=require("express")
const router=express.Router()

const Brand=require("../models/Brand")

// get brands

router.get("/",async(req,res)=>{

const brands=await Brand.find()

res.json(brands)

})

// add brand

router.post("/",async(req,res)=>{

const brand=new Brand(req.body)

await brand.save()

res.json(brand)

})

// delete

router.delete("/:id",async(req,res)=>{

await Brand.findByIdAndDelete(req.params.id)

res.json({message:"Brand deleted"})

})

module.exports=router