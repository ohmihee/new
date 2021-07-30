function User(name,age){
    this.name = name
    this.age = age
    this.sayName = function(){
        console.log(`hi ${this.name}`)
    }
}

let algml = new User('algml',26)
//new 함수명()
console.log(algml) //User { name: 'algml', age: 26, sayName: [Function (anonymous)] }
algml.sayName()  // hi algml
