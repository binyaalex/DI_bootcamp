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

-- ninja
-- select first_name, last_name, salary from employees where salary > (select salary from employees where last_name = 'Bull')

-- select first_name, last_name from employees
-- where manager_id in (
-- select employee_id from employees e
-- join departments d
-- on e.department_id = d.department_id 
-- join locations l
-- on l.location_id = d.location_id 
-- where country_id = 'US' and employee_id in (select manager_id from employees))

-- select first_name, last_name from employees where employee_id in (select manager_id from employees)

-- select first_name, last_name from employees where salary > (select avg(salary) from employees)

-- select first_name, last_name from employees e
-- join jobs j
-- on j.job_id = e.job_id
-- where salary = min_salary

-- select first_name, last_name from employees where employee_id not in (select distinct manager_id from employees )

-- select e.employee_id, e.first_name, e.last_name from employees e
-- inner join (select department_id, avg(salary) from employees group by department_id) d
-- on e.department_id =d.department_id
-- where salary > avg

-- select * from employees order by salary desc offset 4 limit 1

-- select * from employees order by salary offset 3 limit 1

-- select d.department_id, department_name from departments d
-- full join employees e
-- on e.department_id = d.department_id
-- where d.department_id not in (select department_id from employees)

-- select department_name, l.location_id, street_address, city, state, country_name from departments d
-- join locations l
-- on l.location_id = d.location_id 
-- join countries c
-- on c.country_id = l.country_id

-- select d.department_id, department_name, e.first_name, e.last_name from departments d
-- join employees e
-- on e.department_id = d.department_id

-- select d.department_id, department_name, e.first_name, e.last_name, job_id from departments d
-- join employees e
-- on e.department_id = d.department_id
-- join locations l
-- on l.location_id = d.location_id 
-- where city = 'London'

-- select e.employee_id, e.last_name, e.manager_id, (select last_name from employees where e.manager_id = employee_id) manager_last_name from employees e

-- select * from departments d
-- join employees e
-- on e.department_id = d.department_id

-- select  employee_id, job_title, current_timestamp - hire_date from departments d
-- join employees e
-- on e.department_id = d.department_id
-- join jobs j
-- on j.job_id = j.job_id
-- where d.department_id = 90

-- select d.department_name, city, e.manager_id, (select first_name from employees where e.manager_id = employee_id) manager_first_name, (select last_name from employees where e.manager_id = employee_id) manager_last_name from employees e
-- join departments d
-- on e.department_id = d.department_id
-- join locations l
-- on l.location_id = d.location_id 
-- group by d.department_name, city, e.manager_id

-- select job_title, round(avg(salary)) from employees e
-- join jobs j
-- on j.job_id = e.job_id
-- group by job_title

-- select first_name, last_name, department_name, hire_date, salary, (select EXTRACT(year from(current_timestamp))) - (select EXTRACT(year from(hire_date))) working_experience from employees e
-- join departments d
-- on e.department_id = d.department_id
-- where employee_id in (select manager_id from employees) and (select EXTRACT(year from(current_timestamp))) - (select EXTRACT(year from(hire_date))) > 15

-- update employees
-- set phone_number = 999
-- where phone_number ilike '%124%'
-- returning *

-- select * from employees
-- where length(first_name) > 7

-- select * from employees order by salary
-- update employees 
-- set email = first_name[0]
-- where employee_id = 119
-- returning *

-- CREATE or REPLACE FUNCTION flast_email (fn varchar(50), lan varchar(100)) RETURNS varchar AS $email$
-- declare
--     email varchar;
--     fl varchar;
-- 	flast varchar;
-- BEGIN
--    	fl = left(fn, 1);
-- 	flast = concat(fl, lan);
-- 	email = concat(flast, '@example.com');
-- 	RETURN email;
-- END;
-- $email$ LANGUAGE plpgsql;
-- select flast_email('John', 'doe')


-- CREATE or REPLACE FUNCTION ail (email varchar) RETURNS varchar AS $ail$
-- declare
--     ail varchar;
-- BEGIN
--    	ail = left(email, length(email)-3);
-- 	RETURN ail;
-- END;
-- $ail$ LANGUAGE plpgsql;
-- select ail(email), employee_id from employees

-- select job_title, substring(job_title, 1, position(' ' in job_title)) from jobs where job_title ilike '% %'

-- select first_name, length(first_name) first_name_length from employees where first_name ilike 'j%' or first_name ilike 'a%' or first_name ilike 'm%'

-- select first_name, concat(round(salary), '$') SALARY from employees
