/*
AJAX : Asynchronous Javascript And XML
-> 비동기적 웹 서비스 개발시 사용
-> 페이지 이동없이 서버에 요청을 보내고 응답을 받는 기술
-> AJAX 요청 => jQuery나 axios 라이브러리 사용
ex) <script src="https://unpkg.com/axios/dist/axios.js"</srcipt>
    // axios 사용을 위해 연결한 것
    <script>
    // 여기에 코드 넣음
    <script>
*/

const { formatNamedParameters } = require("sequelize/types/lib/utils");

//get 요청
axios.get('요청 보낼 주소')
    .then((rseult)=>{
        console.log(result);
        console.log(result.data);
    // result.data -> 서버로부터 보낸 데이터
    })
    .catch((error)=>{
        console.error(error);
    })

// post요청에서는 데이터를 {}, 즉 객체 형식으로 서버로 보낼 수 있음
axios.post('요청보낼주소',{
    name:'algml',
    hobby:'sleep',
})
.then((result)=>{
    console.log(result);
    console.log(result.data);
})
.catch((error)=>{
    console.error(error);
})


// formdata생성자 => FormData.append('키','값')
// append('키','값'); -> 키 값 형식의 데이터 저장
const forData = new FormData();
formData.append('name','algml');
formData.append('like','sleep');
formData.append('like','eat');
formData.has('like');   //true
formData.has('item');   //false
//has('')해당 인자값이 존재하는지 true/false로 출력
formData.get('like');   //sleep  
// get('')인자값의 키에 해당하는 값 하나 가져옴
formData.getAll('like'); //['sleep','hobby']배열형태로 모두 가져옴
// getAll('')인자값의 키에 해당하는 모든 값 가져옴
formData.append('family',['papa','mama','bro']);
formData.get('family');   // papa, mama, bro
// get은 값 그 자체를 가져옴
formData.delecte('like');
// delete('')인자값에 해당하는 키 제거
formData.get('like');   //null
formData.append('like',['sleep','eat']);
//append는 배열로도 넣을 수 있다.
formData.set('like','watching_tv'); 
// set('',) 인자값에 해당하는 키의 값을 두번재 인자값으로 수정
formdata.getAll('like')  //['watching_tv]
// getAll은 배열로 값을 가져옴

//서버주소에 한글 주소가 포함되어 인식하지 못하는 경우 => encodeURIComponent()사용
//한글 주소를 받을 때는 decodeURIComponent()

/*
dataset => HTML과 관련된 데이터를 저장하는 방법
ex)
<ul>
    <li data-id='1' data-user-job='student'>algml</li>
    <li data=id='2' data-user-job='designer'>algml2</li>
    <li data=id='3' data-user-job='programmer'>algml3</li>
    <li data=id='4' data-user-job='coder'>algml4</li>
</ul>
<script>
    console.log(documnet.querySelector('li').dataset);
    //{id:'1', user-job:'student'}
    //html파일의 li에서 data- 와 관련하여 id,user-job에 대한
     정보를 객체로 가져옴
</scrip>
    //반대로 html태그에 dataset을 이용 data넣는 법
    //dataset.monthSalary=10000;을 넣으면 htmldp data-month-salary='10000'이 생김
*/






