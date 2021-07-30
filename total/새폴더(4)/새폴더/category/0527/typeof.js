const crypto = require('crypto')
//console.log(crypto);
let header = {
    "alg":"HS256",    
    "typ":"JWT"
}
console.log(typeof header)  //object
//헤더는 토큰의 정보 json형식으로  담고 있는 것

let payload = {
    "sub": "1234567890",
    "name": "algml",
    "iat": 123456789,
    "userid":123,
    "user":"algml0703"
}
/*
signature
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    
  your-256-bit-secret
  
  )
2진번
10진법
16진법

바이너리 데이터

 */

let txt = '안녕하세요'
/*for(i=0;i<10;i++){
console.log(txt)
}
*/
let txt2 = Buffer.from(txt);  //Buffer.from(안에는 string이 들어와야 한다.)
//Buffer-> 안녕하세요를 16진수로 바꾼 것
//console.log(txt2)  //<Buffer ec 95 88 eb 85 95 ed 95 98 ec 84 b8 ec 9a 94>
// image도 텍스트로 이루어져 있다. -> 텍스트가 바이너리 형식
// 비트숫자가 같기 때문에 표현하기 쉽다.

// 15 -> 2진법으로  1111        
// 15/2 ...1  7/2 ...1 3/2 =1 ...1  =>  1111
// 10
// 15 -> 16진법으로 표현 F

// 자리수가 바뀌는 숫자
//2진수 8진수 10진수 16진수

let encodeheader = Buffer.from(JSON.stringify(header)).toString('base64').replace('=','')
//toString('base64') -> 64진수로 

// object -> string 
//JSON.stringify(header) -> object를 string 형식으로 바꾸어 주는 것**********************************************


//console.log(encodeheader)

let encodepayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace('=','')
//console.log('encodeplayload',encodepayload)

let signature = crypto.createHmac('sha256',Buffer.from('algml')).update(`${encodeheader}.${encodepayload}`)
                                                                .digest('base64')
                                                                .replace('=','')
// 암호화를 하겠다는 것
//1. 어떤 암호화를 할거냐? (sha256)
//2. 암호화 규칙 스트링으로 적는다.
// update()안에는 header와 payload를 header.payload형식으로 적는다.
console.log('signature', signature)
//console.log('=====',crypto.createHmac('sha256','algml'))

console.log(`${encodeheader}.${encodepayload}.${signature}`) 

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFsZ21sIiwiaWF0IjoxMjM0NTY3ODl9.TBIcATNoIusNjO63JR0txgPmlj/V9FRSLTyHx/7cSWA
// 결과값을 jwt에서 다시 복호화 가능
// invalid가 나올 때는 secret base64 encoded를 누르면 된다.


let algml = {
    name:"algml",
    age:26
}
//console.log(typeof algml,'==========', algml);  //object ========== { name: 'algml', age: 26 }

let algml2 = JSON.stringify(algml)
//console.log(typeof algml2,'===========',algml2);  //string =========== {"name":"algml","age":26}

let token = createtoken()