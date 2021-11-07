-- Database: public

-- DROP DATABASE public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE customers(
--  item_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL
-- )

-- 	SELECT * FROM items
-- 	SELECT * FROM items WHERE price > 80
-- 	SELECT * FROM items WHERE price <= 300
-- 	SELECT * FROM customers WHERE last_name = 'Smith'
-- 	SELECT * FROM customers WHERE last_name = 'Jones'
-- 	SELECT * FROM customers WHERE first_name != 'Scott'
	
-- 	INSERT INTO customers (first_name, last_name)
-- 	VALUES  
-- 		('Greg', 'Jones'),
-- 		('Sandra', 'Jones'),
-- 		('Scott', 'Scott'),
-- 		('Trevor', 'Green'),
-- 		('Melanie', 'Johnson');

