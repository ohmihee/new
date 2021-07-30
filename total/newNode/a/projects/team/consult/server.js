const path = require('path')
const express= require('express')
const { iLike } = require('sequelize/types/lib/operators')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
//const formatMessage = require('./utils/message')
// const {
//     userJoin,getCurrentUser,userLeave,getRoomUsers
// } = require('./utils/users')

function chat(){
    app.use(express.static(path.join(__dirname,'public')))

    const botName = 'talk talk'

    




}