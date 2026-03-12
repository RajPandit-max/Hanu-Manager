const API="http://localhost:5000/api/brands"

async function loadDashboard(){

const res=await fetch(API)

const brands=await res.json()

let totalDeals=brands.length
let totalAmount=0

brands.forEach(b=>{

totalAmount+=Number(b.amount)

})

document.getElementById("dealCount").innerText=totalDeals

document.getElementById("earnings").innerText="₹"+totalAmount

}

loadDashboard()