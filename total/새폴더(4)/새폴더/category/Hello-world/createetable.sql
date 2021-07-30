CREATE DATABASE homepage;
use homepage;

CREATE TABLE board(
    idx INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(100) NOT NULL,
    board_name VARCHAR(50) NOT NULL,
    content TEXT,
    today DATETIME DEFAULT CURRENT_TIMESTAMP,
    hit int(11)
)   AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

/* 빈값이면 현재 날짜를 출력하도록*/

/*
mariaDB -> 역슬래시 기능 존재
    /사용할려면 //권장
    or 
    \대체해서 써라

    C:\Users\KGA_19\Desktop\algml
    orC:/Users/KGA_19/Desktop/algml
*/