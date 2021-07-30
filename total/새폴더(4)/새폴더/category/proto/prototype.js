
// // {코드블럭} 안의 this는 자기 자신 즉 Person을 의미 


// // new를 통해 Person이라는 객체를 새로 만들어 내고 이를 각각  변수 Kim과 Park에 할당



// /*
// funcion과 object의 차이 
// -> 자바스크립트 내에서는 큰 차이 없다.
// -> 객체도 결국 함수의 일종이 된다.
// */


// /*
// prototype link => __proto__
// prototype Object => prototype
// */


// function Person(){
//     this.eyes = 2;
//     this.nose = 1;
// }

// let kim = new Person();
// let park = new Person();

// park.eyes = 4;

// console.log(kim.eyes);


// function Person(){
//     Person.prototype.eyes = 2;
//     Person.prototype.nose = 1;
// }

// let kim = new Person();
// let park = new Person();

// park.__proto__.eyes = 4;

// console.log(kim.eyes);




function Person(){
    this.eyes = 2;
    this.nose = 1;    
}

let kim = new Person();  //생성자  - > 함수를 새로운 객체로 만들겠다.
/*
kim = {
    eyes = 2;
    nose = 1;
}
*/
let park = new Person();

console.log(kim.eyes);
console.log(kim.nose);
console.log(park.eyes);
console.log(park.nose);

let a = {
    eyes : 2
}
console.log(a.eyes);

// 화살표 함수에는 prototype이 존재하지 않는다.
// 즉 prototype 사용하려면 이름이 존재하는 함수를 만들어야 한다.
function foo(){};
foo.prototype.txt = 'hello world';
//prototype 안에 객체에는 마음대로 속성(property)값을 add/delect가능하다.
let obj = new foo();
console.log(obj);
console.log("obj.txt",obj.txt);   //obj.txt hello world
console.log("obj.constructor",obj.constructor);   //obj.constructor [Function: foo]
console.log("foo",foo);             //foo [Function: foo]
console.log("foo.prototype",foo.prototype);     //foo.prototype { txt: 'hello world' }
console.log("obj.__proto__",obj.__proto__);     //obj.__proto__ { txt: 'hello world' }

// 여기까지 prototype object -> proto
// protoytype link -> __proto__
// prototype 함수로 만들어야만 생성됨
// __proto__ 객체라면 모두 존재
// 즉 __protp__는 객체간 연결을 위해 주로 사용

let x = {number1:1};
let y = {number2:2}
console.log(x);

let z = {};
x.__proto__ = y;   //x는 y를 상속받음
z.__proto__ = x;   // z는 y를 상속받은 x를 다시 상속받음

console.log(z.number1);
console.log(z.number2); // 해당 객체에 값이 존재하지 않을 경우 proto에서 찾는다. 
/*
let z = {
    'x' :x;
    'y' :y;
}
*/


let aa = {
    number1:1,
}
let b = {
    number2:2,
}
let c = {
    number3:3,
}
    
b.__proto__ = aa;
console.log(b.number1);   //b가 aa를 상속받는 것
                          //상속받는 주체.__proto__.상속하는 주체;
c.__proto__ = b;
console.log(c.number2);

let user = {
    name : "algml",
    hasOwnProperty:function(){
        console.log('hello');
    }
}
console.log(user);
// 본인이 가진 객체 안에서 가장 먼저 찾고 그 안에 없으면 __proto__로 내려가면 값을 찾는다.
// __proto__에도 없으면 undefiend로 나온다.
// console.log(user.hasOwnProperty()); // user안에 name이라는 속성 존재=>true출력

const car = {
    휠:'4',
    drive (){
        console.log('시동');
    }
}

const 아반떼 = {
    색상 : '블루',
    휠 : '4',
    네비게이션 : true,
    drive (){
        console.log('시동');
    }
}

const 소나타 ={
    색상 : '레드',
    네비게이션 : false,
}

const 제네시스 ={
    색상 : '검정',
    네비게이션 : false,
}
소나타.__proto__ = car;
아반떼.__proto__ = car;
제네시스.__proto__ = car;
console.log("소나타",소나타);
console.log(소나타.__proto__=car);
console.log(소나타.휠);
소나타.drive();














