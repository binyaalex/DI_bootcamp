-- Database: hr.backup

-- DROP DATABASE "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
-- update employees
-- set email = 'not available',
-- 	commission_pct = 0.10
-- where department_id = 110
-- returning *


-- update employees e
-- set email = 'available'
-- where department_id = (select department_id from departments where department_name = 'Accounting')
-- returning *

-- update employees e
-- set salary = 8000
-- where employee_id = 105 and salary < 5000
-- returning *

-- select count(*) from jobs j
-- left join employees e
-- on j.job_id = e.job_id
-- where j.job_id not in (select e.job_id from employees)

-- select count(job_title), job_title from employees e
-- join jobs j
-- on j.job_id = e.job_id
-- group by job_title
-- order by count desc

-- select (max(salary) - min(salary)) from employees

-- select manager_id, min(salary) from employees
-- group by manager_id

-- select round(avg(salary)), job_title from employees e
-- join jobs j
-- on j.job_id = e.job_id
-- group by job_title
-- having job_title != 'Programmer'

-- select count(department_id), round(avg(salary),2) from employees
-- group by department_id
-- having count(department_id) > 10

-- ALTER TABLE locations 
-- RENAME COLUMN state_province 
-- TO state

-- create table bla (
-- 	id serial
-- )
-- ALTER TABLE bla 
-- ADD CONSTRAINT id primary key ( id );

-- create table new_countries (
-- 	country_id character(3) primary key check(country_id not in ('AR',
-- 'AU',
-- 'BE',
-- 'BR',
-- 'CA',
-- 'CH',
-- 'CN',
-- 'DE',
-- 'DK',
-- 'EG',
-- 'FR',
-- 'HK',
-- 'IL',
-- 'IN',
-- 'IT',
-- 'JP',
-- 'KW',
-- 'MX',
-- 'NG',
-- 'NL',
-- 'SG',
-- 'UK',
-- 'US',
-- 'ZM',
-- 'ZW')),
-- 	country_name varchar(100) check(country_name = 'Italy' or country_name = 'China' or country_name = 'India')
-- )
-- select country_id from countries
-- insert into new_countries (country_id, country_name)
-- values('CHN', 'China')

-- CREATE TABLE new_countries2 AS 
-- TABLE new_countries;
-- select * from new_countries2

-- create table new_jobs (
-- 	job_id serial primary key not null,
-- 	job_title varchar(100) default 'blank',
-- 	min_salary integer default 8000,
-- 	max_salary integer default NULL check(max_salary <= 25000)
-- )

-- create table new_employees (
-- 	employee_id serial primary key,
-- 	first_name varchar(50) not null,
-- 	last_name varchar(100)not null,
-- 	email varchar(100),
-- 	phone_number integer,
-- 	hire_date timestamp not null,
-- 	job_id integer references new_jobs (job_id) on delete cascade on update cascade,
-- 	salary integer
-- )

-- create table new_job_history (
-- 	employee_id integer references new_employees (employee_id) on delete cascade on update cascade ,
-- 	start_date timestamp not null,
-- 	end_date timestamp default current_timestamp,
-- 	job_id integer references new_jobs (job_id) on delete cascade on update cascade
-- )

-- insert into new_countries (country_id, country_name)
-- values('CHN', 'China')

-- insert into new_countries (country_id, country_name)
-- values
-- 	('CHI', 'China'),
-- 	('ITL', 'Italy'),
-- 	('IND', 'India')
-- select * from new_employees

-- insert into new_countries2 (country_id, country_name)
-- values
-- 	((select country_id from new_countries where country_id = 'CHI'), (select country_name from new_countries where country_id = 'CHI')),
-- 	((select country_id from new_countries where country_id = 'ITL'), (select country_name from new_countries where country_id = 'ITL')),
-- 	((select country_id from new_countries where country_id = 'IND'), (select country_name from new_countries where country_id = 'IND'))


-- insert into new_jobs (job_title)
-- values('master')
-- insert into new_employees (first_name, last_name, email, phone_number, hire_date, job_id, salary)
-- values('ben', 'mints', 'abc@gmail.com', '0505050505', current_timestamp, (select job_id from new_jobs where job_title = 'master'), 10000)
