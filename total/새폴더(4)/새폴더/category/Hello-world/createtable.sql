create database sample;
use sample;

create table board(
    idx int(11) not null auto_increment primary key,
    subject varchar(100) not null,
    content text,
    today datetime default current_timestamp,
    hit int(11)
) auto_increment=1 default charset=utf8mb4;


/* 
create database sample2;
use sample2;
