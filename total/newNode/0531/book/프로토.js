// 출처 코딩앙마 유튜브
const user = {name:'algml', like:'sleep'}
console.log(user.like);

// __proto__ (프로토)
// hasOwnProperty() -> __proto__가 아닌 객체가 직접 가지고 있는 property에 대해서만 true출력
//user__proto__ = private
// 이는 user가 __proto__에 private을 갖게 되었음을 의미
// 즉 user가 private을 상속받음

// class (클래스)

class User {
    constructor(name,like){
        this.name = name;
        this.like = like;        
    }
    showName(){
        console.log(this.name)
    }
}

let algml = new User('algml','sleep')  

