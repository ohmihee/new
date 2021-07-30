CREATE DATABASE page;
USE page;

CREATE TABLE board1(
    numbers int(11) not null AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100),   
    subject VARCHAR(100) NOT NULL, 
    open_status varchar(10) NOT NULL,
    status varchar(20),  
    date DATETIME DEFAULT CURRENT_TIMESTAMP,  
    hit int(11),  
    content text,    
    product_category VARCHAR(50), 
    siteInfo VARCHAR(100)  
) AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- 실행하는 법
--  mysql에 들어가서 source createtable.sql파일이 존재하는 경로입력
-- 생성되었는지 확인법
-- desc 테이블명 -> 생성된 칼럼명을 보여줌
-- select * from 테이블명 -> 입력된 모든 정보를 보여줌.