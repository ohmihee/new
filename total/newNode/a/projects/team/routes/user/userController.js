
const { User } = require("../../models")
const qs =require('qs')
const pwHash = require('../../createHash.js')
const ctoken = require('../../jwt.js')
const { session } = require("passport")

let login = (req,res)=>{    
    if(req.originalUrl=='/user/login'){
        res.render('./user/login.html')
    }
}

let login_success = async (req,res)=>{
    let {email,psw} = req.body
    let result = {}
    let hashedPw = pwHash(psw)
    console.log('asdfasdfasdfasdfasdfasdfasdfasdfasdfadsfadsf')
    try{
        let resu = await User.findOne({
            where:{
                idx: email,
                psw: hashedPw
            }
        })
        
        
        let token = ctoken(email)   
        res.cookie('AccessToken',token,{})
        req.session.uid = {["local"]:resu.idx}
           
        res.redirect('/')

    }catch(e){
        res.send('<p>해당하는 사용자가 존재하지 않거나 아이디와 비밀번호가 일치하지 않습니다..</p>')
    }
}

let logout = (req,res)=>{
    
    console.log(req.session.uid)
    const {session} = req
    const {uid} = session
    const provider = Object.keys(uid)[0]
    switch(provider){
        case "local":
            delete session.uid
            res.redirect('/?msg=로그아웃되셨습니다.')
        break;
    }
    
}

let join = (req,res)=>{
    res.render('./user/join.html')
}

let join_success = async (req,res)=>{      
    let {idx,psw,name,birth,gender} = req.body    
        psww = pwHash(psw)
    console.log(req.body.idx,'join_success부분')
    let tel = req.body.tel
        tel = tel.replace('-','').replace('-','')
    let created_at = new Date().toLocaleDateString()
    let img = 'img'
    let email = 'email'

    await User.create({idx,psw:psww,name,birth,gender,created_at,tel,img,email})
    res.redirect('/')
}

const kakao = {
    clientID : '6a6edcb3952747d14b2f508442194cfd',
    clientSecret : 'lVh2mUcKBbUFYoRTdynz1FAR4RwRHelA',
    redirectUri : 'http://localhost:3000/user/auth/kakao/callback'
}

let login_kakao = (req,res)=>{
    const kakaoAUthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`
    res.redirect(kakaoAUthURL)
}

let login_kakao_callback = async(req,res)=>{
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
}

// 클라이언트 ID
//768593577687-f1a6it1fq9s9vkqe73ij8c3fkrdav338.apps.googleusercontent.com
// 클라이언트 보안 비밀번호
// mbkz28nQm5A_YlqOdkW-rEGN

let login_google = (req,res)=>{
    res.send('google login')
}




module.exports = {
    login:login,
    join:join,
    join_success:join_success,
    login_success:login_success,
    login_kakao:login_kakao,
    login_kakao_callback:login_kakao_callback,
    logout:logout,
    login_google:login_google
}