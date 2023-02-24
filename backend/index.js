const express = require("express");
require("dotenv").config()
const {connection} = require("./configs/db") 
const {userRouter} = require("./routes/user.routes")
const {menRouter} = require("./routes/men.routes")
const {authenticate} = require("./middlewares/users.middleware")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())



app.use("/users",userRouter)
app.use("/mens",menRouter)
app.listen(process.env.port,async()=>{

    try{
           await connection 
        console.log(`Server is running at port ${process.env.port}`)
    }
    catch(err){
        console.log(err.message)
    }
})


