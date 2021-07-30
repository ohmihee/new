const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const port = process.env.PORT||3004

app.set('view engine','html')

nunjucks.configure('views',{express:app})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`server start port ${port}`)
})

