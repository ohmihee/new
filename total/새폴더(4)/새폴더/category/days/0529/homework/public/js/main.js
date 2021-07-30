//alert('connect')
document.addEventListener('DOMContentLoaded',init)

function init(){
    const loginBtn = document.querySelector('#loginBtn')
    const layerPopup = document.querySelector('.layerPopup')
    loginBtn.addEventListener('click',loginBtnFn)
    layerPopup.addEventListener('click',popupClose)
    localLogin.addEventListener('click',login)
}

function loginBtnFn(){
    const layerPopup = document.querySelector('.layerPopup')
    layerPopup.classList.add('open')
}

function popupClose(event){
    
    console.log(event)
    console.log(this)
    if(event.target == false){
        this.classList.remove('open')
    }
}

async function login(){
    const userid = document.querySelector('#userid')
    const userpw = document.querySelector('#userpw')

    if(userid.value==""){
        alert('아이디를 입력해주세요')
        userid.focus()
        return 0
    }
    if(userpw.value==""){
        alert('패스워드를 입력해주세요')
        userpw.focus()
        return 0
    }

    let url = 'http://localhost:3013/auth/local/login'

    let options = {
        method : "POST",
        headers : {
            'content-type' : 'application/json',
            'data' : JSON.stringify({userid:userid.value,userpw:userpw.value})
        },
        body : JSON.stringify({userid:userid.value,userpw:userpw.value})
    }
    let response = await fetch(url,options)
    let json = await response.json()
    console.log(json)
    let {result,msg} = json
    alert(msg)
    if(result){
        // 로그인 성공시
        let layerPopup = document.querySelector('.layerPopup')
        layerPopup.classList.remove('open')
    }else{
        userid.value=""
        userpw.value=""
        userid.focus(); 
    }








}