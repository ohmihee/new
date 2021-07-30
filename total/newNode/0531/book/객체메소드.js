//object.assigon()=================================================
//객체 복제
let user = {name:"algml", age:26, like:"tv"}
let newUser = Object.assign({},user)
console.log(newUser) //{ name: 'algml', age: 26, like: 'tv' }
let info1 = {like:"sleep"}
let info2 = {hobby:'sleep'}
Object.assign(newUser,info1,info2)
// object.assign의 첫 번째 인자에 나머지 인자에 있는 객체를 복제하여 넣어줌
// 만약 기존에 동일한 키가 존재한다면 이후에 넣는 값으로 교체됨
console.log(newUser) //{ name: 'algml', age: 26, like: 'sleep', hobby: 'sleep' }

//object.keys() ================================================
//키 배열 반환
let keys = Object.keys(newUser)
console.log(keys)  // [ 'name', 'age', 'like', 'hobby' ]

//object.values()
// 값 배열 반환
let values = Object.values(newUser)
console.log(values) //[ 'algml', 26, 'sleep', 'sleep' ]

//object.entries()
// 객체를 배열형식으로 반환
let entries = Object.entries(newUser)
console.log(entries)
/*
[
  [ 'name', 'algml' ],
  [ 'age', 26 ],
  [ 'like', 'sleep' ],
  [ 'hobby', 'sleep' ]
]
*/

// Objext.fromEntries
// 배열을 객체형식으로 반환
let a = Object.fromEntries(entries)
console.log(a)
// { name: 'algml', age: 26, like: 'sleep', hobby: 'sleep' }
