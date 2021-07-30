require('dotenv').config()
const crypto = require('crypto')
const ctoken = require('../jwt.js')

module.exports = (req,res,next)=>{
    let {AccessToken} = req.cookies
    if(AccessToken == undefined){
        console.log(' 로그인이 필요--middleware_auth 에 위치')
        return
    }
    
    let [header,payload,sign] = AccessToken.split('.')
    let signature = getSignature(header,payload)

    if(sign == signature){
        console.log('token check============')
        let {userid,exp} = JSON.parse(Buffer.from(payload,'base64').toString())
        let nextDate = new Date().getTime()
        if(nexDate>exp){
            res.clearCookie('AccessToken')
            res.redirect('/?msg = token id expired')
        }
        req.userid = userid
        next()
    }else{
        console.log('부적절한 토큰 middleware_auth')
        res.json({result:false, msg:'wrong token'})
    }
}

function getSignature(header,payload){
    const signature = crypto.createHmac('sha2560',Buffer.from(process.env.salt))
                            .update(header+'.'+payload)
                            .digest('base64')
                            .replace('==','')
                            .replace('=','')
    return signature
}