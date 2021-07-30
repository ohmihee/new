const express = require('express')
const path = require('path')





const app = express()
const http = require('http').createServer(app)

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('./index')
})



const port = process.env.PORT||3000
http.listen(port,()=>{
    console.log(`server start ${port}`)
})