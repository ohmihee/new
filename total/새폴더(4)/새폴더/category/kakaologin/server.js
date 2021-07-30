// API를 잘 활용하는 것도 중요=========================================================
// 카카오 로그인 
// 내 애플리케이션 추가 -> rest apl 키 -> url redirect생성 -> 보안 : 코드발급
// REST API 키 사용 6a6edcb3952747d14b2f508442194cfd        //	
// http://localhost:8000/auth/kakao/callback
// 코드
// 세션과 쿠키 필요
// oAuth 필요  :  http기반 보안 프로토콜================================================
/* autherication 인증 authoization 허가  */
// axios내용 잘 알아두기===============================================================


/*
카카오 로그인  -> REST API로 제공되며 OAuth 2.0기반   
* OAuth 2.0 : open api의 표준 인증 방법
// 카카오계정고 앱을 연결, 토큰을 발급받아 카카오 API를 이용할 수 있게끔
// 로그인 : 엑세스 토큰을 통한 사용자 인증 즉 사용자를 연결해주는 것
// 로그아웃 : 토큰을 만료시켜 로그아웃   <--> 연결끊기 : 카카오계정과 앱의 연결을 끊는 것
*/


// =============================================================================================
const express = require('express')
const nunjucks = require('nunjucks')
const axios = require('axios')
// 
const app = express()
const qs = require('qs')
const session = require('express-session')
const bodyParser = require('body-parser')

app.set('view engine', 'html')
nunjucks.configure('views',{
    express:app,
})

app.use(bodyParser.urlencoded({extended:false}))

app.use(session({
    secret:'asdfasdf',
    resave:false,
    secure:false,
    saveUninitialized:false,
}))

const kakao = {
    clientID : '6a6edcb3952747d14b2f508442194cfd',
    clientSecret : 'cXK2CpB4puLNNY9IEEvFCZirD5mdxpQC',
    redirectUri : 'http://localhost:3000/auth/kakao/callback'
}

app.get('/', (req,res) => {
    const {msg} = req.query;
    console.log(req.session.authData)
    res.render('index',{
        msg,
        logininfo:req.session.authData,
    })
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/login2',(req,res)=>{
    console.log(req.headers);
    console.log(req.get('user-agend'));
    res.status(200).json({text:'error'});
})

app.post('/login',(req,res)=>{
    // npm i body-parser
   // console.log(req.body);
    const {session,body} = req;
    const {userid,userpw} = body;

    //useridd와 userpw 값을 가지고 DB조회
    //userid root userpw root 일때 성공하는 시나리오
    if(userid=='root' && userpw=="root"){
        const data = {
            userid,
        }
        session.authData = {
            ["local"]:data,
        } 
        res.redirect('/?msg=로그인 완료되었습니다.');
        //console.log('성공')
    }else{
        res.redirect('./?msg=아이디와 패스워드를 확인해주세요');
        //console.log('실패');
    }
})

app.get('/auth/kakao', (req,res) => {
    const kakaoAUthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`
    res.redirect(kakaoAUthURL)
})

app.get('/auth/kakao/callback',async (req,res)=>{
    const {session,query} = req;  //req.query를 변수 qurey에 담고
    const {code} = query;  // req.query.code를 변수 code에 넣은 것

    let token;
    try{
        token = await axios({
            // axios => promise object
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers:{
                'content-type':'application/x-www-form-urlencoded',
            },
            data:qs.stringify({
                grant_type:'authorization_code',
                client_id:kakao.clientID,
                client_secret:kakao.clientSecret,
                redirectUri:kakao.redirectUri,
                code   //:req.query.code,

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

    

   // req.session.kakao = user.data;
    /* 위에랑 같은 구문
    req.session = {
        ['kakao']:user.data,
    }
    // 다양한 로그인 방식을 이용하기 위해서는 위의 방법이 더욱 유용하다.
    */

    const authData = {
        ...token.data,
        ...user.data,
        // 깊은 복사
        // 이후에 원본의 값이 변하여도 복사시점의 값을 이용
    }
    session.authData = {
        ['kakao']:authData,
    }
    //console.log('===========================================================================================================',session);
    res.redirect('/')
})

const authMiddleware = (req,res,next)=>{
    const {session} = req;
    if(session.authData == undefined){
        //console.log('로그인이 되어있지 않음')
        res.redirect('/?msg=로그인 안되어있음')
    }else{
        //console.log('로그인 되어있음');
        next();
    }
}

app.get('/auth/info',authMiddleware,(req,res)=>{
    console.log('session=======================================',req.session);
    // let {nickname,profile_image} = req.session.kakao.properties
    const {authData} = req.session;
    const provider = Object.keys(authData)[0];
    //provider는 authData 에서 키만 가져오는 것
    // 위에 authData에는 키가 kakao 하나만 존재하므로 뒤에 [0]을 붙이지 않아도 상관없다.
    //const provider = Object.values(authData)[0].id;
    
    // 위에처럼 하면 모든 값에서 id 값만 가져옴
    // 배열에서 값 형태로 바뀌는
    const aaa = Object.values(authData)[0];
    // aaa는 authdata에서 값만 받은 것
    console.log(`aaa:${aaa}`);
    console.log('provider=====================',provider)
    //console.log('authData',authData)
    // object사용한 이유 ?
    // authData는 객체인 상태 
    //console.log(provider,'......................................................................');
    let userinfo = {}

    switch (provider){
        case "kakao":        
        userinfo = { 
            userid:authData[provider].properties.nickname,
        }        
        break;
        case "local":
            userinfo={
                userid:authData[provider].userid,
            }
    }
    res.render('info',{
        userinfo,
    })
})



app.get('/auth/kakao/unlink', async(req,res)=>{
    // 위의 url에 get으로 접근하면 
    const {session} = req;
    const {access_token} =session.authData.kakao
    // kakao객체에 있는 access_token의 내용을 access_token에 담음
    //console.log(access_token);
    let unlink;
    try{
        unlink = await axios({
            method:'POST', // 요청은 post로
            url:'https://kapi.kakao.com/v1/user/unlink', //url은 이것으로
            headers:{
                Authorization:`Bearer ${access_token}` // 헤더는 해당 내용으로
            }
        })
    } catch(error){
        res.json(error.data);
    }
    //console.log(unlink.data); // 해당 값이 출력된이유 // 이미 카카오츨에서는 우리아이디를 로그아웃 or 회원정보 완료
    // 우리측에서는 세션 지워줘야함
    // 우리가 필요한 것은 id만
    const {id} = unlink.data;
    // unlink.data의 id를 id라는 변수에 담아 사용

    if(session.authData['kakao'].id == id){
        delete session.authData;
    }

    res.redirect('/?msg=로그아웃되셨습니다.')


})

app.get('/auth/logout',(req,res)=>{
    const {authData} = req.session;
    const provider = Object.keys(authData)[0];
    switch(provider){
        case "local":
            // 어떻게 로그아웃?
            delete session.authData;
            res.redirect('/?msg=로그아웃되셨습니다.')
        break;
        case "kakao":
            // 카카오일때 어떻게 로그아웃?
            res.redirect('/auth/kakao/unlink')
        break;
    }   
})

app.listen(3000,()=>{
    console.log(`server port 3000`)
})