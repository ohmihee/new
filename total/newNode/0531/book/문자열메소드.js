let c = console.log
let a = 'asdf'
let A = 'ASDF'

//toUpperCase()
// 대문자로
c(a.toUpperCase())   //ASDF

//toLowerCase()
// 소문자로
c(A.toLowerCase())   //asdf

//.indexOf(text)
let str = 'my name is...'
c(str.indexOf(' ')) // 2 // 즉 ' '이 위치한 2 출력 0->m 1->y 2->' '