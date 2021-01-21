CREATE TABLE memories(

   img_id SERIAL PRIMARY KEY,
   memory_title VARCHAR (50),
   memory_location VARCHAR (50) NOT NULL,
   memory_description VARCHAR (255) NOT NULL,
   memory_image bytea NOT NULL,
   memory_date DATE not null


);

CREATE TABLE memories(

   img_id SERIAL PRIMARY KEY,
   memory_title VARCHAR (50) NOT NUll,
   memory_location VARCHAR (50) NOT NULL,
   memory_description VARCHAR (255) NOT NULL,
   memory_date DATE not null


);

-- //EXAMPLE HERE 


-- CREATE TABLE employees (
--     employee_id serial PRIMARY KEY,
--     first_name VARCHAR (255),
--     last_name VARCHAR (355),
--     birth_date DATE NOT NULL,
--     hire_date DATE NOT NULL
-- );