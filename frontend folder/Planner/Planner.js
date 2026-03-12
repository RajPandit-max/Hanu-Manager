const API = "http://localhost:5000/api/planner"

async function addPlan(){

const title = document.getElementById("title").value
const date = document.getElementById("date").value

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
title,
date
})
})

loadPlans()

}

async function loadPlans(){

const res = await fetch(API)

const plans = await res.json()

const list = document.getElementById("planList")

list.innerHTML=""

if(plans.length===0){

list.innerHTML="<p>No content planned</p>"
return

}

plans.forEach(p=>{

const div=document.createElement("div")

div.className="listItem"

div.innerHTML=`

<h3>${p.title}</h3>
<p>Date: ${p.date}</p>

`

list.appendChild(div)

})

}

loadPlans()