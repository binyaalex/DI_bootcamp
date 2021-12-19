-- Database: chatapp

-- DROP DATABASE chatapp;

-- CREATE DATABASE chatapp
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE users (
--  phone_number varchar(50) PRIMARY KEY not null,
--  username VARCHAR (50) NOT NULL
-- )

select * from users order by phone_number
-- where room_id = '12' and message_send != 'null'

-- select * from users u
-- join rooms r
-- on r.phone_number_1 = u.phone_number or r.phone_number_2 = u.phone_number 
-- where phone_number_2 = '2' 
-- and phone_number not like '2'
-- or phone_number_1 = '2' 
-- and phone_number not like '2'

-- CREATE TABLE rooms (
--  room_id varchar(50) PRIMARY KEY not null,
--  phone_number_1 varchar REFERENCES users (phone_number),
--  phone_number_2 varchar REFERENCES users (phone_number)
-- )

-- INSERT INTO rooms(room_id, phone_number_1, phone_number_2)
-- VALUES ('05555555650524314178', '0555555565', '0524314178');

-- CREATE TABLE chats (
--  room_id varchar(50) REFERENCES rooms (room_id),
--  message_send varchar (50) REFERENCES users (phone_number),
--  message_get varchar (50) REFERENCES users (phone_number),
--  message_text varchar not null,
--  time timestamp default now()
-- )

-- INSERT INTO chats(room_id, message_send, message_get, message_text)
-- VALUES ('05555555650524314178', '0555555565', '0524314178', 'hsafdgjasfhd');

-- ALTER TABLE users
-- ADD COLUMN password varchar default 123;