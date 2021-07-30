const express = require('express');
const app = express();
const { use } = require('.');
const router = express.Router;
const {User} = require('../../models/index');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

let join = (req,res)=>{
    res.render('./user/join.html');
}

let login = (req,res)=>{
    res.render('./user/login.html');
}

let info = async (req,res)=>{
    let userlist = await User.findAll();
    res.render('./user/info.html',{
        userlist:userlist,
    })
}

let join_success = async (req,res)=>{
    let userid = req.body.userid;
    let username = req.body.username;
    let userpw = req.body.userpw;
    let gender = req.body.gender;
    try{
        let rst = await User.create({
            userid,userpw,username,gender,})
    }catch(e){
        console.log(e);
    }
    res.render('./user/join_success.html',{userid,username})
}


let login_ck = async (req,res)=>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;

    let result = await User.findOne({
        where:{userid,userpw}
    })
    req.session.uid = userid;
    req.session.isLogin = true;

    req.session.save(()=>{
        res.redirect('/');
    })
}

module.exports = {
    join:join,
    login:login,
    info:info,
    join_success:join_success,
    login_ck:login_ck
}