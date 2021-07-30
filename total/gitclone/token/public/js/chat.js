const chatBtn = document.querySelector('#chatBtn')
const chatRoom = document.querySelector('#chatRoom')

let flag = undefined


chatBtn.addEventListener('click',()=>{
    switch(flag){
        case true:
            //열린상태에서 다시 누를 때 -> 닫히도록
            flag = false;
            chatRoom.style.display='none'
            // request 자체를 여러번 요청하지 않고 display를 통해 화면상으로만 보였다 안 보인게
            // 이를 위해 flas값을 바꾸어 주며 
        break;
        case false:
            // 처음 제외하고 다시 열때
            flag = true
            chatRoom.style.display='block'
        break;
        case undefined:
            // 처음 이 버튼을 눌렀을 때 -> 즉 처음 열때 
            flag = true
            getChatRoom()
        break;
    }
    
})

async function getChatRoom(){
    let url = "http://localhost:3000/chat" 
    let options = {method:'GET'}
    let response = await fetch(url,options)
    let result = await response.text()
    // result 값이 실패시에는 json형태로 받음
    // result 값을 성공적으로 받으면 text형태로 받음
    if(isJson(result)){  // 로그인 처리에 실패했을 때
        let json = JSON.parse(result)
        if(json.result == false) alert(json.msg)
        return
        //auth.js 에서 res.json({})
    }else{ // 로그인 처리가 잘 완료되었을 때 
        chatRoom.innerHTML = result
    }

}

// 아래의 함수를 통해 result가 json인지 아닌지 확인
function isJson(str){    
    //JSON.parse(str)
    // text를 json형태로 하려면 위와 같이 하면 된다.
    try{
        let json = JSON.parse(str);
        return (typeof json == 'object')
    }catch(e){
        return false
    }
}

