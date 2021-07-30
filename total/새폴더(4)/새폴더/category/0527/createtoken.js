
const crypto = require('crypto')

let header = {
    'alg' : "HS256",
    'typ' : "JWT"
}

let payload = {
    "sub" : "1234567890",
    "name" : "mihee",
    "iat" : 123456789
}
let encodeheader = Buffer.from(JSON.stringify(header)).toString('base64').replace('=','')

let encodepayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace('=','')

let signature = crypto.createHmac('sha256',Buffer.from('mihee')).update(`${encodeheader}.${encodepayload}`)
                                                                .digest('base64')
                                                                .replace('=','')
console.log(`${encodeheader}.${encodepayload}.${signature}`)

