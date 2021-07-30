const fs = require('fs');
fs.readFile('in.html',{encoding:'utf-8'},function(err,data){
    if(err){
        console.log('nonononono');
    }else{
        console.log(data);
    }
})
console.log('success');
/* 
- fs는 file-system 파일 관련 모듈
- fs에 file-system을 할당
- fs.readFile은 파일을 읽는다.
- fs.readFile('파일명',{encoding:'인코딩방식'},function(err,data){
    if(err){                      //만약 오류가 나면 실행될 것
         
    }else{
        console.log(data)         // 오류가 나지 않고 정상적으로 작동할 때 실행될 것
                                  // data는 불러온 파일의 결과 즉 결과를 출력
    }
})
console.log('success');    // a가 붙지 않은 동기 방식으로 처리하였으므로 먼저 success가 출력되고
                              이후에 data를 출력

*/