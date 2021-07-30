/* express nunjucks / index.html render */
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = process.env.PORT||3003

nunjucks.configure('views',{
    express:app,
})

app.set('view engine','html')

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(port,()=>{
    console.log('server start port',  port)
})
