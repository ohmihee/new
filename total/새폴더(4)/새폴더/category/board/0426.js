/*
MVC
M : model      -> 변수
V : view       -> html
C : controller -> 
*/
// 1) 파일 쪼개기
// 2) 비동기
//  참고 https://github.com/ingoo-code/nodejs_board/tree/master

// Q)새폴더 만들면 왜 옆으로 만들어 지는 것인지 물어보기

// [] -> 배열    a[0].변수  배열은 []으로 가져온다.
// {변수:값} -> 객체는 .으로 가져온다.

let 자동차 = {
    아반떼:{
        엔진:'v2'
    },
    소나타:{
        엔진:'v1'
    }
}
console.log(자동차.아반떼.엔진);     // => v2

let 자동차차 = [
    {name:'아반떼',engine:'v0', hadle:'동그라미'},
    {name:'소나타',engine:'v1', hadle:'세모'},
    {name:'그렌저',engine:'v2', hadle:'네모'}
]
console.log(자동차차[2].engine);      // =>v2

let 차 = {
    아반떼:['v1',{handle:'동그라미'}, '바퀴4개'],
    소나타:['v2',{handle:'네모'},'바퀴5개'],
    그랜저:['v3',{handle:'세모'},'바퀴6개'],
    제네시스:function(){
        console.log('aaaa');
    }
}
console.log(차.그랜저[1].handle);
console.log(차.제네시스());

let obj = [
    {
      idx: 3,
      subject: '바나나',
      writer: '오미희',
      today: '2021-04-26'
    },
    {
      idx: 4,
      subject: '레몬',
      writer: '',
      today: '2021-04-26'
    },
    {
        idx: 3,
        subject: '사과',
        writer: '오미희',
        today: '2021-04-26'
    },
    {
        idx: 3,
        subject: '귤',
        writer: '오미희',
        today: '2021-04-26'
    },
    {
        idx: 3,
        subject: '오렌지',
        writer: '오미희',
        today: '2021-04-26'
    },
  ]
 obj.forEach(e=>{
     console.log(e.subject);
 })