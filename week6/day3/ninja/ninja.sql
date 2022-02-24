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

-- select * from film f
-- inner join inventory i
-- on f.film_id = i.film_id 
-- inner join rental r
-- on i.inventory_id = r.inventory_id
-- where not(return_date IS NOT NULL) and (rating = 'G' or rating = 'PG')

-- create table kids_customer (
-- 	kid_id serial primary key,
-- 	first_name varchar(50),
-- 	last_name varchar(100)
-- )

-- create table kids_film_waitingList (
-- 	date timestamp default current_timestamp not null,
-- 	film_id_fk integer not NULL references film (film_id) on delete cascade on update cascade,
-- 	kid_id_fk integer not NULL references kids_customer (kid_id) on delete cascade on update cascade,
-- 	primary key (film_id_fk, kid_id_fk)
-- )

-- insert into kids_customer (first_name, last_name)
-- values('yosi', 'levi'),
-- ('menash', 'cohen')

-- insert into kids_film_waitingList (film_id_fk, kid_id_fk)
-- values (
-- 	(select film_id from film where title = 'Hyde Doctor'),
-- 	(select kid_id from kids_customer where first_name = 'yosi')
-- ),
-- (
-- 	(select film_id from film where title = 'Hunger Roof'),
-- 	(select kid_id from kids_customer where first_name = 'yosi')
-- ),
-- (
-- 	(select film_id from film where title = 'Hunger Roof'),
-- 	(select kid_id from kids_customer where first_name = 'menash')
-- ),
-- (
-- 	(select film_id from film where title = 'Frost Head'),
-- 	(select kid_id from kids_customer where first_name = 'menash')
-- )

-- select count(*), title from kids_film_waitingList
-- inner join film
-- on film_id = film_id_fk
-- group by title