
const {Board} = require('../../models');

let login = (req,res)=>{
    res.render('login.html')
}
let join = (req,res) => {
    res.render('join.html');
}

let logout = (req,res)=>{
    delete req.session.userid
    delete req.session.username
    delete req.session.isLogin
    res.redirect('/')
}
let login_check = async(req,res) =>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let result = await Board.findOne({
        where:{userid,userpw,}
    })
    if(result == null){
        res.redirect('/?flag=0')
    }else{
        username = result.dataValues.name
        req.session.userid = userid;
        req.session.username = username
        req.session.isLogin = true;
        req.session.save(()=>{
            res.redirect('/')
        })
    }
}
let userid_value = async(req,res) =>{
    let userid = req.query.userid;
    let flag = false;
    let result = await Board.findOne({
        where:{userid} //db에 들어갔는지 확인
    })
    if(result == undefined){
        flag = true
    }else{
        flag = false
    }
    console.log(userid)
    console.log(result)
    res.json({
        login:flag,
        userid,
    })
   
    
    
}
let join_check = async (req,res) => {
   
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let name = req.body.name;
    let gender = req.body.gender;
    console.log(req.body.userid)
    console.log(req.body.userpw)
    console.log(req.body.name)
    console.log(req.body.gender)
    try{
        let rst = await Board.create({
            userid,
            userpw,
            name,
            gender,
        })
    } catch(e){
        console.log(e)
    }
    res.redirect('/');
}
let userid_check = async (req,res)=>{

    console.log('aaaa')
    let userid = req.query.userid;
   
    let flag = false;
    let result = await Board.findOne({
        where:{ userid }
    })
    console.log(result);
    //result undefined 생성가능
    //result 객체가 존재하면 생성 불가능
    if(result == undefined){
        //생성가능
        flag = true;
    }else{
        flag = false;
     //불가능
    }
    res.json({
        login:flag,
        userid,
    })
}

module.exports = {
    login,
    join,
    join_check,
    userid_check,
    userid_value,
    login_check,
    logout,
}