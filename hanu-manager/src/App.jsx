import { useState } from "react"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import Dashboard from "./components/pages/Dashboard"
import Brands from "./components/pages/Brands"
import Payments from "./components/pages/Payments"
import Planner from "./components/pages/Planner"

function App(){

const [page,setPage] = useState("dashboard")

return(

<div style={{display:"flex"}}>

<Sidebar setPage={setPage}/>

<div style={{flex:1}}>

<Topbar/>

{page==="dashboard" && <Dashboard/>}
{page==="brands" && <Brands/>}
{page==="payments" && <Payments/>}
{page==="planner" && <Planner/>}

</div>

</div>

)

}

export default App
