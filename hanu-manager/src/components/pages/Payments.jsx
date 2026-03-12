import { useState } from "react"

function Payments(){

const [payments,setPayments] = useState([])

const [brand,setBrand] = useState("")
const [amount,setAmount] = useState("")

function addPayment(){

const newPayment={
brand,
amount
}

setPayments([...payments,newPayment])

setBrand("")
setAmount("")

}

function deletePayment(index){

const updated = payments.filter((_,i)=>i!==index)

setPayments(updated)

}

return(

<div style={{padding:"30px"}}>

<h1>Payments</h1>

<input
placeholder="Brand"
value={brand}
onChange={(e)=>setBrand(e.target.value)}
/>

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<button onClick={addPayment}>Add Payment</button>

<ul>

{payments.map((p,i)=>(

<li key={i}>

{p.brand} — ₹{p.amount}

<button onClick={()=>deletePayment(i)}>
Delete
</button>

</li>

))}

</ul>

</div>

)

}

export default Payments