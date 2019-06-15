const express = require("express")
const path = require("path")

//instance express create express server apache
const app = express()

//在express开启静态文件处理
app.use(express.static(__dirname))


app.use("/api",(req,res)=>{
    res.json({code:200})
})

app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})
