//세션, 쿠키 필요함
//oauth 필요함 - HTTP 보안 프로토콜 - KEY
//Authoization 허가 : Autherication 인증
//REST API KEY : f38672340ae732f5ccfece4d8b810a62
//redirect uri : http://localhost:3000/auth/kakao/callback
//secret KEY : W9JAqOgb6BKXaDLLD1TEkaEWnYtOOYAn
//profile account_email

const express = require('express')
const nunjucks = require('nunjucks')
const axios = require('axios')
const app = express()
const session = require('express-session')
const qs = require('qs')

app.use(session({
    secret:'asdf',
    resave:false,
    secure:false,
    saveUninitialized:false,

}))

app.set('view engine', 'html')

nunjucks.configure('views',{
    express:app,
})

const kakao = {
        clientID: 'f38672340ae732f5ccfece4d8b810a62',
        clientSecret: 'W9JAqOgb6BKXaDLLD1TEkaEWnYtOOYAn',
        redirectUri: 'http://localhost:3000/auth/kakao/callback'
}

app.get('/', (req,res) => {
    res.render('index')
})
app.get('/auth/kakao', (req,res) => {
    const kakaoAUthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`
    res.redirect(kakaoAUthURL)
})

app.get('/auth/kakao/callback',async (req,res)=>{
    
    const {session,query} = req
    const {code} = query

    console.log(req.query)

    let token;
    try{
        token = await axios({
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            },
            data:qs.stringify({
                grant_type:'authorization_code',
                client_id:kakao.clientID,
                client_secret:kakao.clientSecret,
                redirectUri:kakao.redirectUri,
                code,
            }) 
        })
    } catch(err){
        res.json(err.data)
    }

    let user
    try{
        user = await axios({
            method:'GET',
            url:'https://kapi.kakao.com/v2/user/me',
            headers:{
                Authorization: `Bearer ${token.data.access_token}`
            }
        })
    } catch (err) {
        res.json(err.data)
    }


    //req.session.kakao = user.data

    const authData = {
        ...token.data,
        ...user.data,
    }

    session.authData = {
        ["kakao"]:authData,
    }

    console.log(session)

    res.redirect('/')
})

const authMiddleware = (req,res,next) => {
    const {session} = req;
    if(session.authData == undefined){
        console.log('로그인이 되어있지않음.')
        res.redirect('/?msg=로그인 안되어있음.')
    } else {
        console.log('로그인 되어있음.')
        next()
    }
}

app.get('/auth/info', authMiddleware, (req,res) => {

    const {authData} = req.session
    const provider = Object.keys(authData)[0]
    console.log(provider)

    let userinfo = {}
    switch(provider){
        case "kakao":
            userinfo = {
                userid:authData[provider].properties.nickname,
            }
        break;
    }

    res.render('info',{
        userinfo,
    })

})

app.listen(3000,()=>{
    console.log(`server port 3000`)
})