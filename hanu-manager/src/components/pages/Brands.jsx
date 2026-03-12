import { useEffect, useState } from "react"
import { supabase } from "../supabase"

function Brands(){

const [brands,setBrands] = useState([])
const [name,setName] = useState("")
const [amount,setAmount] = useState("")

async function fetchBrands(){

const {data} = await supabase
.from("brands")
.select("*")

setBrands(data)

}

async function addBrand(){

await supabase
.from("brands")
.insert([{name,amount,status:"pending"}])

fetchBrands()

}

async function deleteBrand(id){

await supabase
.from("brands")
.delete()
.eq("id",id)

fetchBrands()

}

useEffect(()=>{
fetchBrands()
},[])

return(

<div style={{padding:"30px"}}>

<h1>Brands</h1>

<input
placeholder="Brand name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}
/>

<button onClick={addBrand}>Add</button>

<ul>

{brands.map(b=>(

<li key={b.id}>

{b.name} ₹{b.amount}

<button onClick={()=>deleteBrand(b.id)}>
Delete
</button>

</li>

))}

</ul>

</div>

)

}

export default Brands