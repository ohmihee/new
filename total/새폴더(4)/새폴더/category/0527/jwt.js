const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')}) 

// process.env.
const crypto = require('crypto');


// JWT 토큰 생성 header.payload.signature
function createToken(userid){
    let header = {
        "tpy" :"JWT",
        "alg":"HS256"
    }
    let exp = new Date().getTime() + ((60  * 60 * 2)*1000)// 1970년 1월 1일 부터 0으로 계산
    // 시간을 알려주는 함수
    // 즉 exp는 현재 시간에서 2시간을 더한 숫자
    
    let payload = {
        userid,
        exp // 시간 -> 토큰의 만료시간을 정하기 위함
             // exp는 2시간이므로 즉 토큰의 만료시간은 2시간
    }
    const encodingHeader = Buffer.from(JSON.stringify(header))
                                .toString('base64')
                                .replace('=','')
                                .replace('==','')

    const encodingPayload = Buffer.from(JSON.stringify(payload))
                                  .toString('base64')
                                  .replace('=','')
                                  .replace('==','')

    const signature = crypto.createHmac('sha256',Buffer.from(process.env.salt))
                            .update(encodingHeader+"."+encodingPayload)
                            .digest('base64')
                            .replace('=','')
                            .replace('==','')
    // process.env.salt값을 토대로 암호화
    // 즉 키의 역할(키값)
    // 때문에 공개되면 안 되므로 보안을 위해 내용을 감추기 위해
    // npm dotenv install
    // .env 안에 숨기려는 내용 salt = algmlalgml 이런식으로 입력
    // 실제 server.js에서 사용시에는 const dotenv = require('dotenv').config(); 이러한 식으로
                            

    let jwt = `${encodingHeader}.${encodingPayload}.${signature}`
    return jwt
                            
}   
//let token = createToken('root');


module.exports = createToken;