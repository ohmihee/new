/* 날씨정보 가져오기 
    http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=20313df3cc7ccf0b314fd37d36732f83 
    main.temp    켈빈방식으로 날씨줌 

  위치정보는 https:// 를 사용해야 가능합니다.
  그래서 포기하기로함.
*/

const btn = document.querySelector('#btn');
btn.addEventListener('click',init);

let 날씨;
let txt;
function init(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=20313df3cc7ccf0b314fd37d36732f83&lang=kr&&units=metric')
    .then(data => {
        return data.json();
    })
    .then(json =>{
        console.log(json);
        날씨 = json.main.temp;
        txt += `${날씨.toFixed(1)}℃ <br />`
        const box = document.querySelector('#root');
        box.innerHTML = txt;
    })
}






