/*

const crypto = require('crypto')

let header = {
    'alg' : "HS256",
    'typ' : "JWT"
}

// header는 토큰의 정보를 JSON형식으로 갖고있음

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
//crypto.createHmac( algorithm, key, options )
// 알고리즘으로 'sha256'을 사용하고 key로 mihee를 16진수한 것으로 두고 data의 내용을 (`${encodeheader}.${encodepayload}`)으로 update한다는 것
// .diges('base64')는 base64로 다시 해싱하겠다는 것
// update()안에는 header와 payload를 header.payload형식으로 적음 
console.log(`${encodeheader}.${encodepayload}.${signature}`)


*/

let a = 'abc'
let encodeA = Buffer.from(a)
console.log(encodeA) //<Buffer 61 62 63>
// abc는 16진수의 값으로 출력시 61 62 63
// 즉Buffer.from()은 안에 들어가는 인자값을 16진수 값으로 바꿔준다.
let num = 123;
//let encodeNum = Buffer.from(num)
// console.log(encodeNum) -> 오류 발생
// -> 즉 Buffer.from()의 인자값으로는 string만 올 수 있다.

let c = {
    'name' :"algml"
}
//let encodeC = Buffer.from(c)
//console.log(encode2) -> 오류 발생
// 위에서 c도 string이 아닌 object이므로 오류 발생
let encodeC2 = Buffer.from(JSON.stringify(c/* num */)) 
console.log(encodeC2)//<Buffer 7b 22 6e 61 6d 65 22 3a 22 61 6c 67 6d 6c 22 7d>
// JSON.stringify()는 안의 인자를 string형식으로 바꾸어주는 함수
// {는 16진수로 7b 즉 
// let encodeC2 = Buffer.from(JSON.stringify(c/* num */)) 는 {'name' :"algml"}를 Buffer.from을 통해 16진수로 바꾸는데 그 이전에 Buffer.from()의 인자값으로는 string만 줄 수 있으므로
// JSON.stringify()로 먼저 string형식으로 바꾸어 준 것이다.

// 인코딩 -> 정보의 형태나 형식을 표준화, 보안 등을 위하여 다른 형식으로 변화하는 처리방식을 의미
// base64 -> Binary Data를 Text형태로 바꾸어 주는 것 즉 Bin
let encodeC3 = Buffer.from(JSON.stringify(c)).toString('base64')//eyJuYW1lIjoiYWxnbWwifQ==
// 즉 위의 toString('base64')는 JSON.stringify()로 object에서 string형태가 된 것을 다시 Buffer.from()으로 16진수 형태로 바꾸고 이를 다시 base64로 인코딩한 것
console.log(encodeC3)//eyJuYW1lIjoiYWxnbWwifQ==

let encodeC4 = Buffer.from(JSON.stringify(c)).toString('base64').replace('==','').replace('=','')
console.log(encodeC4) //eyJuYW1lIjoiYWxnbWwifQ
// replace('인자1','인자2')는 값에서 인자1이 존재하면 인자2로 바꾸어 주는 것





//https://www.ibm.com/docs/ko/aix/7.1?topic=adapters-ascii-decimal-hexadecimal-octal-binary-conversion-table
// 각 진수별 값 나와있는 사이트

//

