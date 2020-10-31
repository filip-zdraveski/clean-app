-- Execute all statements here to reset database
-- [CTRL+A, CTRL+ENTER -> console]

drop schema public cascade;
create schema public;

grant all on schema public to postgres;
grant all on schema public to public;

-- Create tables below this line

create table public.cities (
    id serial primary key ,
    name text not null unique
);

create table public.garbage_zones (
    id serial primary key,
    city_id int not null references public.cities(id),
    coordinates text,
    description text
);

-- Insert data into existing tables below this line

insert into public.cities(name)
values ('Берово'), ('Битола'), ('Богданци'), ('Валандово'), ('Велес'), ('Виница'), ('Гевгелија'), ('Гостивар'),
       ('Дебар'), ('Делчево'), ('Демир Капија'), ('Демир Хисар'), ('Кавадарци'), ('Кичево'), ('Кочани'), ('Кратово'),
       ('Крива Паланка'), ('Крушево'), ('Куманово'), ('Македонски Брод'), ('Македонска Каменица'), ('Неготино'),
       ('Охрид'), ('Пехчево'), ('Прилеп'), ('Пробиштип'), ('Радовиш'), ('Ресен'), ('Свети Николе'), ('Скопје'),
       ('Струга'), ('Струмица'), ('Тетово'), ('Штип');

insert into public.garbage_zones(city_id, coordinates, description)
values (30, '41.978171, 21.447856', 'Населба 11 октомври, после супер тинексот кон центар, од десна страна'),
       (2, '41.0319425,21.3396502', 'Позади автобуската станица Битола'),
       (23, '41.102808, 20.807226', 'На паркингот кај Билјанини Извори');