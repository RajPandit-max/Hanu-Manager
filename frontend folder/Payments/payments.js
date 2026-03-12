const API = "http://localhost:5000/api/payments"

async function addPayment(){

const brand = document.getElementById("brandName").value
const amount = document.getElementById("amount").value

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
brand,
amount,
status:"pending"
})
})

loadPayments()

}

async function loadPayments(){

const res = await fetch(API)

const payments = await res.json()

const list = document.getElementById("paymentList")

list.innerHTML=""

if(payments.length===0){

list.innerHTML="<p>No payments yet</p>"
return

}

payments.forEach(p=>{

const div=document.createElement("div")

div.className="listItem"

div.innerHTML=`

<h3>${p.brand}</h3>
<p>Amount ₹${p.amount}</p>
<p>Status: ${p.status}</p>

`

list.appendChild(div)

})

}

loadPayments()