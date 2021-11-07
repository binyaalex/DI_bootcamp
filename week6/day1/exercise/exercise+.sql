-- Database: bootcamp

-- DROP DATABASE bootcamp;

-- CREATE DATABASE bootcamp
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE students (
--  item_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  birth_date date not null
-- )

-- select * from students;
-- select first_name, last_name from students where item_id = 2;
-- select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc'; 
-- select first_name, last_name from students where last_name = 'Benichou' or first_name = 'Marc'; 
-- select first_name, last_name from students where first_name like '%a%'; 
-- select first_name, last_name from students where first_name Ilike 'a%'; 
-- select first_name, last_name from students where first_name Ilike '%a'; 
-- select first_name, last_name from students where first_name Ilike '_%a%'; 
-- select first_name, last_name from students where item_id = 1 and item_id = 3;
--  select * from students where birth_date >= '01/01/2000';

-- insert into students (first_name, last_name, birth_date)
-- values ('Benjamin', 'Alexander', '17/02/1992');
-- 	('Marc', 'Benichou', '02/11/1998'),
-- 	('Yoan', 'Cohen', '03/12/2010'),
-- 	('Lea', 'Benichou', '27/07/1987'),
-- 	('Amelia', 'Dux', '07/04/1996'),
-- 	('David', 'Grez', '14/06/2003'),
-- 	('Omer', 'Simpson', '03/10/1980');	