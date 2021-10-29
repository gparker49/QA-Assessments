create database company;

create table sales (saleid int not null, product_name varchar(100), quantity int, price float, sale_date date, primary key (saleid));