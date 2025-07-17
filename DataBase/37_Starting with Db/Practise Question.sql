create database assignment;
use assignment;
create table teacher (
id int primary key,
name varchar(50),
subject varchar(20),
salary int);
insert into teacher(id,name,subject,salary)
values (23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","computer",50000),
(9,"shradha","development",90000);
set sql_safe_updates =0;
drop table teacher;
select *from teacher;
select *from teacher where salary >55000;
alter table teacher 
change column salary ctc int;
update teacher 
set ctc = ctc+ctc*(0.25);
alter table teacher add column city varchar(30) default"gurgaon";

alter table teacher drop column ctc;