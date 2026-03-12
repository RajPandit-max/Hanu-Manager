import { Bar } from "react-chartjs-2"

function Analytics(){

const data = {

labels:["Jan","Feb","Mar","Apr"],

datasets:[{

label:"Revenue",

data:[20000,35000,12000,40000]

}]

}

return(

<div style={{width:"500px"}}>

<h2>Revenue Analytics</h2>

<Bar data={data}/>

</div>

)

}

export default Analytics