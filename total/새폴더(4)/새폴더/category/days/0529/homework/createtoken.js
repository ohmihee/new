const crypto = require('crypto')

let header = {
    'alg' :"HS256",
    'typ' : "JWT"
}

let payload = {
    "sub" :"123456789",
    "name":"algml",
    "iat":123456789
}

let encodeheader = Buffer.from(JSON.stringify(header)).toString('base64').replace('=','')
let encodepayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace('=','')
let signature = crypto.createHmac('sha256',Buffer.from('algml')).update(`${encodeheader}.${encodepayload}`)
                                                                .digest('base64')
                                                                .replace('=','')

console.log(`${encodeheader}.${encodepayload}.${signature}`)
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJuYW1lIjoiYWxnbWwiLCJpYXQiOjEyMzQ1Njc4OX0.S8pJ4Ldqry24bdxxRYI/N+PF6bPmcHB/akwynUaahTI
// 암호회되어 있는 토큰 생성

//Buffer.from(txt) 
// -> Buffer.from()안에는 반드시 string이 오며 그 스트링의 16진수의 값으로 바꿔주는 역할
//