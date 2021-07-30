const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const app = express()

const PORT = process.env.PORT||3010

app.set('view engine','html')

app.use(bodyParser.urlencoded({extended:false}))

nunjucks.configure('views',{express:app})

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/list',(req,res)=>{
    res.render('list')
})

app.get('write',(req,res)=>{
    res.redirect('/list')
})

app.get('view',(req,res)=>{
    res.render('board_view')
})

app.get('/modify',(req,res)=>{
    res.redirect('/list')
})











let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'board'
})

connection.connect();












app.listen(PORT,()=>{
    console.log(`server start ${PORT}`)
})