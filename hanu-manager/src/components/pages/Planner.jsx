import { useState } from "react"

function Planner(){

const [tasks,setTasks] = useState([])

const [title,setTitle] = useState("")
const [date,setDate] = useState("")

function addTask(){

const newTask={
title,
date
}

setTasks([...tasks,newTask])

setTitle("")
setDate("")

}

function deleteTask(index){

const updated = tasks.filter((_,i)=>i!==index)

setTasks(updated)

}

return(

<div style={{padding:"30px"}}>

<h1>Content Planner</h1>

<input
placeholder="Video Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<button onClick={addTask}>Add Plan</button>

<ul>

{tasks.map((t,i)=>(

<li key={i}>

{t.title} — {t.date}

<button onClick={()=>deleteTask(i)}>
Delete
</button>

</li>

))}

</ul>

</div>

)

}

export default Planner