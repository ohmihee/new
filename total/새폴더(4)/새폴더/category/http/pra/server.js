const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT||3002

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine','html')
nunjucks.configure('views',{
    express:app
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`server start ${port}`)
})