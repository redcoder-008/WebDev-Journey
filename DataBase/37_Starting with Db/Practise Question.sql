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
use  assignment;
create table students(
rollno int,
name varchar(20),
city varchar(20),
marks int);
insert into students (rollno,name,city,marks)
values(110,"adam","Delhi",76),
(108,"bob","Mumbai",65),
(124,"casey","Pune",94),
(112,"Duke","Pune",80);

select *from students where marks>75;
select distinct city from students;
select city 
from students 
group by city;

select city ,max(marks)
from students 
group by city;
select avg(marks)
from students;
alter table students 
add column grade varchar(2);
set sql_safe_updates =0;
update students
set grade ='0'
where marks >=80;
update students 
set grade = 'A'
where marks >=70 and marks <80;
update students 
set grade ='B'
where marks<=70 and marks >60;
select *from students;












