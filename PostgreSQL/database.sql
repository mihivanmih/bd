create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE post(
   id SERIAL PRIMARY KEY,
   title VARCHAR(255),
   content VARCHAR(255),
   user_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES person (id)
);

psql \! chcp 1251 - кодировка
select * from person; - простой запрос
psql.exe -d postgres -U postgres - подключение к psql через консоль на винде
\connect node_postgres; - коннект к бд