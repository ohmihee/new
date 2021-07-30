

document.addEventListener('DOMContentLoaded',init);
function init(){
    const loginBtn = document.querySelector('#loginBtn');
    const layerPopup = document.querySelector('.layerPopup');
    loginBtn.addEventListener('click',loginBtnFn)
    layerPopup.addEventListener('click',popupClose);
    localLogin.addEventListener('click',login)
}

function loginBtnFn(){
    const layerPopup = document.querySelector('.layerPopup');
    layerPopup.classList.add('open')
    //console.log(this)
}

function popupClose(event){
    console.log(event)
    console.log(this)
    if(event.target ==false){
        this.classList.remove('open')
    }
}

async function login(){
    const userid = document.querySelector('#userid');
    const userpw = document.querySelector('#userpw');

    if(userid.value==""){
        alert('아이디를 입력해주세요');
        userid.focus();
        return 0;
    }
    // return 쓰는 이유 
    // return이 없으면 밑에까지 진행되게 된다.
    // 즉 함수를 끝내기 위함
    if(userpw.value==""){
        alert('패스워드를 입력해주세요.');
        userpw.focus();
        return 0;
    }
    //  POST  auth/local/login
    let url = 'http://localhost:3009/auth/local/login';
    /*
    let options = {
        method:'POST',
        headers:{
            'content-type':'application/x-www-form-urlencoded'
        },
        body:`userid=${userid.value}&userpw=${userpw.value}`,

        //headers
        //body
        // 값을 여러개 보낼 때 -> key==value & key2=value2  
    }
    */
    let options = {
        method : 'POST',
        headers : {
            'content-type':`application/json`,
            'data':JSON.stringify({
                userid:userid.value,
                userpw:userpw.value
            })
        },
        body:JSON.stringify({
            userid:userid.value,
            userpw:userpw.value,
        })
    }
    let response = await fetch(url,options);
    //console.log(response)
    let json = await response.json();
    console.log(json);
    let  {result,msg} = json;
    alert(msg)
    if(result){
        //로그인 성공
        let layerPopup = document.querySelector('.layerPopup');
        layerPopup.classList.remove('open')
    }else{
        userid.value='';
        userpw.value='';
        userid.focus();
    }
}




