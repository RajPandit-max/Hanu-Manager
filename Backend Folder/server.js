const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

// routes
app.use("/api/auth",require("./routes/auth"))
app.use("/api/brands",require("./routes/brands"))
app.use("/api/deals",require("./routes/deals"))
app.use("/api/payments",require("./routes/payments"))
app.use("/api/planner",require("./routes/planner"))

app.listen(5000,()=>{
console.log("Server running on port 5000")
})