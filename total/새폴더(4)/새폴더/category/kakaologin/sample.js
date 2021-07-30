console.log('비구조할당문');
// 비구조할당문은 기존 복사시점의 값을 이용

let arr = [1,2,3,4,5,6,7,8,9];

// arr요소를 각각 한 번씩 찍으려면
let [a,b,c,d,e, ...last] = arr;
// 나머지는 last로 처리
console.log(a,b,c,d,e, ...last);

let obj = {a:10,b:20,c:30,d:40};
// ?==============================================================? 보통 반대로 할당아닌가? 질문 

let {a:a2, ...last2} = obj;
// a는 a2다 // a의 변수명을 a2로 하겠다.
console.log(a);    //즉 10 출력
console.log(last2);

let {a:name,b:age,c:key,d:weight} = obj;
// 위에서 obj의 요소에 지정된 것을 아래에서 다른 이름으로 다시 지정해줌으로싸
console.log(name); // a  // 10
console.log(age);  // b  // 20
console.log(key);  // c  // 30
console.log(weight);  // d  // 40

let arr2 = [1,2,3];
let copy = arr2;
let copy2 = [...arr2];

arr2[0] = 'algml';

console.log(copy);  // [ 'algml', 2, 3 ]
// 값이 할당된 변수를 가져와 변수의 값이 바뀌면서 출력값이 달라짐
console.log(copy2);  // [ 1, 2, 3 ]
// 복사 시점의 값 자체를 가져옴 // 즉 이후에 변수의 값이 바뀌어도 출력값은 복사시점 그대로 출력