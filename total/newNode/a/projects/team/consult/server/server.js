//console.log('hi')
//fetch, ajax ====> server ====> client
//websocket ====> server ====> client

const io = require('socket.io')(3000)

io.on('connection',socket =>{
    console.log(socket.id)
})

console.log('end')