const API="http://localhost:5000/api/brands"

function showPage(page){

document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"))

document.getElementById(page).classList.remove("hidden")

document.getElementById("title").innerText=page

}


function openBrandModal(){

document.getElementById("brandModal").style.display="flex"

}


function openPlannerModal(){

document.getElementById("plannerModal").style.display="flex"

}


async function addBrand(){

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const amount=Number(document.getElementById("amount").value)

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
amount,
status:"pending"
})
})

document.getElementById("brandModal").style.display="none"

loadBrands()

}


async function loadBrands(){

const res=await fetch(API)

const brands=await res.json()

const list=document.getElementById("brandList")

list.innerHTML=""

let total=0

brands.forEach(b=>{

const amt=Number(b.amount || 0)

total+=amt

const row=document.createElement("div")

row.className="row"

row.innerHTML=`

<span>${b.name}</span>
<span>${b.email}</span>
<span>₹${amt}</span>
<span class="status ${b.status}">${b.status}</span>

`

list.appendChild(row)

})

document.getElementById("dealCount").innerText=brands.length
document.getElementById("earnings").innerText="₹"+total

}

async function addPlan(){

const title=document.getElementById("titleInput").value
const date=document.getElementById("dateInput").value

const list=document.getElementById("planList")

const div=document.createElement("div")

div.className="card"

div.innerHTML=`<h4>${title}</h4><p>${date}</p>`

list.appendChild(div)

document.getElementById("plannerModal").style.display="none"

}

loadBrands()