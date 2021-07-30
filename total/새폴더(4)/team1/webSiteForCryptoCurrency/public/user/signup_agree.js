let chkAll=document.querySelector('.chk_necessary_all');

function check(checked = true) {
    const chk = document.querySelectorAll('input[name="chk"]');
    chk.forEach((cb) => {
        cb.checked = checked;
    });
}

function checkAll() {
    check();
    // reassign 
    this.onclick = uncheckAll;
}

function uncheckAll() {
    check(false);
    this.onclick = checkAll;
}

chkAll.onclick = checkAll;

/***********next btn**************/



let chk3= document.querySelector('.chk_optional');
let submits = document.querySelector('input[type="submit"]');

window.onload=function(){
    submits.setAttribute('disabled','true');
}


window.addEventListener('change',()=>{
    let chk1= document.querySelector('.chk_necessary1');
    let chk2= document.querySelector('.chk_necessary2');

    if(chk2.checked && chk1.checked){
        submits.removeAttribute('disabled');
    }else if(!chk2.checked || !chk1.checked){
        submits.setAttribute('disabled','true');
    }
})
