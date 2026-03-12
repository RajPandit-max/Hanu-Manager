import { useState } from "react"
import { supabase } from "../supabase"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

async function login(){

const {error} = await supabase.auth.signInWithPassword({

email,
password

})

if(error) alert(error.message)

}

async function signup(){

const {error} = await supabase.auth.signUp({

email,
password

})

if(error) alert(error.message)

}

return(

<div style={{padding:"40px"}}>

<h1>HANU Manager Login</h1>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button onClick={login}>Login</button>
<button onClick={signup}>Signup</button>

</div>

)

}

export default Login