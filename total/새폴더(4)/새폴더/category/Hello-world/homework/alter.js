const mysql = require('mysql');
let con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'createConnection'
})
con.connect(function(err){
    if(err) throw err;
    let sql ='alter table nu add ageee int';
    let sql2 ='alter table nu drop age';
    con.query(sql2,function(err,results){
        if(err) throw err;
        console.log(results);
    })
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log('alter use');
    })
})


// add :필드를 추가할 때
// drop : 필드를 삭제할 때 
// alter table nu modify column ageee varchar(50)  : 테일블의 필드 타입 변경 시 구문



// 숙제 다 하지는 못하고 일부만 했습니다.
