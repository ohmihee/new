const express = require('express')
const {sequelize} = require('./models')
const {User} = require('./models')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const port = process.env.PORT||3011
const app = express()
const indexRouter = require('./routers')

app.set('view engine','html')
app.use(bodyParser.urlencoded({extended:false}))
nunjucks.configure('views',{express:app,})

app.use(express.static('public'))
// views와 public에 같은 이름의 파일이 있을 경우 public에 있는 파일부터 먼저 읽혀서
// views의 파일은 읽히지 않게 된다.
app.get('/',indexRouter)





app.listen(port,(req,res)=>{
    console.log(`server start port ${port}`)
})
