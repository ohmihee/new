let [x,y] = [1,2]
console.log(x) //1
console.log(y) //2

let fruits = ['apple','banana','melon']
let [fruit1,fruit2,fruit3] = fruits

console.log(fruit1,fruit2,fruit3) //apple banana melon

//배열 구조 분해
let str = 'Mike-Tom-Jane'
let [user1,user2,user3] = str.split('-')
// -을 기준으로 하여 나누고 각각에 할당
console.log(user1,user2,user3) //Mike Tom Jane

let user = {userName:'algml',userAge:26}
let {userName,userAge} = user
console.log(userName,userAge) //algml 26