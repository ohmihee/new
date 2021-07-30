require('dotenv').config();

const crypto = require('crypto');
const { response } = require('express');
const ctoken = require('../jwt')

module.exports = (req,res,next)=>{
    let {AccessToken} = req.cookies
    if(AccessToken==undefined){
        res.redirect('/?msg=로그인을 진행해주세요')
        return 0
    }
    let [header,payload,sign] = AccessToken.split('.')
    let signature = getSignature(header,payload)
    console.log('authpage signature',signature)

    if(sign==signature){
        console.log('검증된 토큰입니다.');

        let {userid,exp} = JSON.parse(Buffer.from(payload,'base64').toString())
        let nexp = new Date().getTime()
        if(nexp > exp){
            console.log('토큰 만료되었습니다.')
            res.clearCookie('AccessToken')
            res.redirect('?msg=토큰만료')
            return 0
        }
        req.userid = userid
        next()
    }else{
        res.redirect('/?msg=부적절한 토큰')
        return 0
    }
}




function getSignature(header,payload){
    const signature = crypto.createHmac('sha256',Buffer.from(process.env.salt))
                            .update(header+"."+payload)
                            .digest('base64')
                            .replace('==','')
                            .replace('=','')
    return signature
}