require('dotenv').config();
const crypto = require('crypto');
const ctoken = require('../jwt');

module.exports =  (req,res,next) =>{
    

    let {AccessToken} = req.cookies// 클라이언트의 cookie.accesstoken
    if(AccessToken==undefined){
        res.redirect('/?msg=로그인을 진행해주세요')    
        return 0
    }
    
    // let tokenArr = AccessToken.split('.');
    // let header = tokenArr[0];
    // let payload = tokenArr[1]

    let [header,payload,sign] = AccessToken.split('.');
    let signature = getSignature(header,payload);
    console.log(signature)

    if(sign == signature){
        console.log('검증된 토큰입니다.');
    // console.log(Buffer.from(payload));  //<Buffer 65 79 4a 31 63 32 56 79 61 57 51 69 4f 69 4a 79 62 32 39 30 49 69 77 69 5a 58 68 77 49 6a 6f 78 4e 6a 49 79 4d 54 67 34 4e 44 4d 35 4d 54 6b 32 66 51 ... 1 more byte>
    //console.log(Buffer.from(payload,'base64').toString());//{"userid":"root","exp":1622188508730}
    // console.log(JSON.parse(Buffer.from(payload,'base64').toString())); //{ userid: 'root', exp: 1622188562367 }
        let {userid,exp} = JSON.parse(Buffer.from(payload,'base64').toString())
        //console.log(userid) //root
        //console.log(exp)    //1622188715828
        //exp는 토큰의 기간 만료를 위해 생성한 것 
        // exp -> 현재 시간으로부터 2시간 뒤를 저장한 것
        let nexp = new Date().getTime();
        if(nexp > exp){
        // 현재 시간이 만료 시간보다 커진다면 즉 기간이 만료된다면
        console.log('토큰 만료되었습니다.')
        //res.json({result:false,msg:'토큰만료'})
        res.clearCookie('AccessToken')
        res.redirect('/?msg=토큰만료')
        return 0
        }
        // 모든 검증 완료
        req.userid= userid;
        console.log(req.userid)
        next()
        
    }else{
        res.redirect('/?msg=부적절한 토큰')
        return 0 
    }

}

function getSignature(header,payload) {
    const signature = crypto.createHmac('sha256',Buffer.from(process.env.salt))
                            .update(header+"."+payload)
                            .digest('base64')
                            .replace('==','')
                            .replace('=','')

    return signature
} 


// express jwt 토큰 라이브러리가 존재
// 이해를 위해 직접 코드를 쳐본 것
// 코드 다시 한번 쳐볼 것
// https://velopert.com/2448
// npm jsonwebtoken