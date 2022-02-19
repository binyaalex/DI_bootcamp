-- Database: dvdrental

-- DROP DATABASE dvdrental;

-- CREATE DATABASE dvdrental
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
-- select * from film
-- select 
-- 	rating,
-- 	count(rating) 
-- from 
-- 	film 
-- group by 
-- 	rating 
-- order by 
-- 	count(rating)

-- select * from film where  (length < 120 and rental_rate < 3) and (rating = 'G' or rating = 'PG-13') order by title
select * from address
-- update customer
-- set first_name = 'benjamin',
-- 	last_name = 'alexander'
where address_id = 5
-- returning *;
-- update address
-- set address = '5421 Hrtsel'
-- where address_id = 5

