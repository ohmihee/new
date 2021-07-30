let submit = document.querySelector('.submit');

window.addEventListener('change',()=>{
    let id = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let passwordChk = document.querySelector('#password_chk').value;
    
    if(id && password && passwordChk){
        submit.removeAttribute('disabled');
    }
    else{
        submit.addAttribute('disabled');
    }
})

submit.addEventListener('click',()=>{
    let id = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let passwordChk = document.querySelector('#password_chk').value;
    if(!id){
        alert('아이디를 입력하세요');
    } else if(password!=passwordChk){
        password = '';
        passwordChk='';
        alert('비밀번호를 확인하세요.');
    }
})