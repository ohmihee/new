//실시간 서비스 
//tcp   //udp
/*
//tcp
=> 서버소켓생성 =>클라이언트 소켓 연결,소켓간 연결=>데이터교환=>접속끊기
*/
const net = require('net');
const socket = new net.Socket();
const option = {
    host='localhost',
    port=3000
};
socket.connect(option,function(){
});

const server = net.createServer(function(socket){
    console.log('ConnectEvent',socket.remoteAddress);
});

server.on('listening',function(){
    console.log('Server is listening@',server.address());
});

server.on('close',function(){
    console.log('server close')
})