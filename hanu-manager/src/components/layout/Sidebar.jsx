function Sidebar({setPage}){

return(

<div style={{
width:"220px",
height:"100vh",
background:"#111",
color:"white",
padding:"20px"
}}>

<h2>HANU</h2>

<p onClick={()=>setPage("dashboard")} style={{cursor:"pointer"}}>Dashboard</p>
<p onClick={()=>setPage("brands")} style={{cursor:"pointer"}}>Brands</p>
<p onClick={()=>setPage("payments")} style={{cursor:"pointer"}}>Payments</p>
<p onClick={()=>setPage("planner")} style={{cursor:"pointer"}}>Planner</p>

</div>

)

}

export default Sidebar