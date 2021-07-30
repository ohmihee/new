// Class 사용이유
//  => 유동적인 객체를 만들기 위해

// ex)
let Person = {
    name:'algml',
    age:26,
}

//위와 같이 만들어야 하는 객체가 수십 수백개이상이라면...

function people(name,age){
    this.name = name;
    this.age =age;
    
    this.SetName = function (_name){
        this.name=_name;
    }
} 
// 위에는 객체의 하위로 나오고
people.prototype.getName = function(){
    return this.name;
}
// 위에 내용은 객체의 _proto_ 내용으로 나옴
console.dir(people);
let a = new people('qoa',20);

people.getage = function(){
    return 'age';
}

console.log(a);
// 함수로 만들어서 console.dir()로 하면 constructor객체가 존재x
// new로 새롭게 생성할 때 정적메소드는 나오지 않음
// 정적 메소드는 따로 사용해야함
class human{
    constructor(name,age){   // 1순위로 실행됨 => new로 생성시에도 인자값 주어야함
        this.name = name;
        this.age = age;
    }
    static setName = function(){
        return 'a';
    }
    // class에서 static 사용시 new로 새롭게 생성시
    // 내용이 나오지 않음
    // 유동적 객체를 만들기 위함인 class에서 static이 필요한 이유?
    // 생성하지 않고 사용하고 싶을 때 사용 가능 and 함수로 다시 전달가능
    getName = function(){
        return this.name;
    }

}
// class로 새로운 객체를 만드는 경우에는 _proto_로 내용이 들어가는 것이 아님
// class 이용시에는 객체의 하위로 들어감
let coa = new human('coa',26);
let ooa = new human('ooa',26);

console.log(ooa);
// class 방법===============================================
class 클래스명{
    constructor(){

    }
}

//=========================================================