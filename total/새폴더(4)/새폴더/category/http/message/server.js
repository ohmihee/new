const express = require('express')
const nunjucks = require('nunjucks')
const port = process.env.PORT||3006
const app = express()

nunjucks.configure('views',{express:app})

app.set('view engine','html')

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`server start port ${port}`)
})