const express = require('express');
const router = express.Router();

let login = (req,res) =>{
    res.render('./routers/user/login.html');
}

let signUp= (req,res) =>{
    res.render('./routers/user/signup_agree.html');
}
//post
let signupForm = (req,res) =>{
    res.render('./routers/user/signup_form.html',{

    })
}
//post
let signSuccess = (req,res) =>{
    res.render('./routers/user/signup_success.html')
}

let findPw = (req,res) =>{
    res.render('./routers/user/find_pw.html')
}

//post
let pwSuccess = (req,res) =>{
    res.render('./routers/user/find_pw_success.html',{

    })
} 
module.exports={
    login,signUp,signupForm,signSuccess,findPw,pwSuccess,
}

//fighiting;;