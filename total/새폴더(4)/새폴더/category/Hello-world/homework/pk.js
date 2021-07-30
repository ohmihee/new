const mysql = require('mysql');
let con = mysql.createConnection({      //mysql.createConnection은 mysql 서버와 상호작용을 위해 사용
    // host user password database등의 매개변수는 서버 및 데이터베이스 만들 때 설정한 값을 넣는다.
    host:'localhost',                                           
    user:'root',
    password:'root',
    database:"createConnection"
})

con.connect(function(err){          //connect 함수는 서버에 대한 연결 설정 시에 사용
    if(err) throw err;                 
    console.log('connected');
    var sql = 'create table nu(id int auto_increment primary key,name varchar(50),address varchar(255))';
    con.query(sql, function (err, result){          //query함수는 mysql 데이터베이스에 대해 쿼리 실행 시 사용
        if(err) throw err;
        console.log('table created');
    });
})







//mysql에 입력한 것
/*
Enter password: *********
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 54
Server version: 10.5.9-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> use createconnection
Database changed
MariaDB [createconnection]> desc nu;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int(11)      | NO   | PRI | NULL    | auto_increment |
| name    | varchar(50)  | YES  |     | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
3 rows in set (0.021 sec)

MariaDB [createconnection]> insert nu(name,addree) values('algml','cjsghehd');
ERROR 1054 (42S22): Unknown column 'addree' in 'field list'
MariaDB [createconnection]> insert nu(name,address) valuse('algml','cjsgh');
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'valuse('algml','cjsgh')' at line 1
MariaDB [createconnection]> insert nu(name,address) values('algml','cjsgh');
Query OK, 1 row affected (0.001 sec)

MariaDB [createconnection]> dese nu;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'dese nu' at line 1
MariaDB [createconnection]> desc nu;
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int(11)      | NO   | PRI | NULL    | auto_increment |
| name    | varchar(50)  | YES  |     | NULL    |                |
| address | varchar(255) | YES  |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
3 rows in set (0.021 sec)

MariaDB [createconnection]> select * from nu;
+----+-------+---------+
| id | name  | address |
+----+-------+---------+
|  1 | algml | cjsgh   |
+----+-------+---------+
1 row in set (0.000 sec)

MariaDB [createconnection]>
*/





