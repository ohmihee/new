console.log('switch문 이해');

//성별
let gender = '남자';

if(gender == '남자'){
    console.log(1);
} else if(gender=='여자'){
    console.log(2);
}

switch(gender){
    case '남자':
        console.log(1)
    break;
    case '여자':
        console.log(2);
    break;
}

let 과일 ='키위';
switch(과일){
    case '바나나':
    case '참외':
        console.log('노랑')
    break;
    case '사과':
        console.log('빨강')
    break;
    case '키위':
    case '수박':
        console.log('초록')
    break;
    case '포도':
        console.log('보라')
    break;
    default:
        console.log('입력되지 않은 과일입니다.')
}


