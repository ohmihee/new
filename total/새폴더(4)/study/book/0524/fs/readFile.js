const fs = require('fs');
//readFile -> 해당 파일 내용을 가져와준다.
fs.readFile('./index.html',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    // 사람이 보기 쉬운 string 형식으로 변환한 것
    console.log(data.toString());
})

const fsPromise = fs.promises;
fsPromise.readFile('./index.html')
    .then((data)=>{
        console.log(data,'=========================');
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })
// 해당 파일에 뒤에 인수로 준 값을 작성
fsPromise.writeFile('./index.txt','fs의 writeFile을 이용');

fs.mkdir('makefolder');

// fs관련 153pg
