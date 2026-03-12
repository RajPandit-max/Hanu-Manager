function Navbar({setPage}){

return(

<div style={{background:"#111",padding:"20px",color:"white"}}>

<button onClick={()=>setPage("dashboard")}>Dashboard</button>

<button onClick={()=>setPage("brands")}>Brands</button>

<button onClick={()=>setPage("payments")}>Payments</button>

<button onClick={()=>setPage("planner")}>Planner</button>

</div>

)

}

export default Navbar