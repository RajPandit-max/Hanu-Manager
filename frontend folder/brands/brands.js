const API="http://localhost:5000/api/brands"

async function addBrand(){

const name=document.getElementById("brandName").value
const email=document.getElementById("brandEmail").value
const amount=document.getElementById("dealAmount").value

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
amount
})
})

loadBrands()

}

async function loadBrands(){

const res=await fetch(API)

const brands=await res.json()

const list=document.getElementById("brandList")

list.innerHTML=""

if(brands.length===0){

list.innerHTML="<p>No brands added yet</p>"

return

}

brands.forEach(b=>{

const div=document.createElement("div")

div.className="listItem"

div.innerHTML=`

<h3>${b.name}</h3>

<p>${b.email}</p>

<p>Deal ₹${b.amount}</p>

`

list.appendChild(div)

})

}

loadBrands()