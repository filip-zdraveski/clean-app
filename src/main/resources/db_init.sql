-- Execute all statements here to reset database
-- [CTRL+A, CTRL+ENTER -> console]

drop schema public cascade;
create schema public;

grant all on schema public to postgres;
grant all on schema public to public;

-- Insert new queries below this line

create table public.garbage_zones (
    id serial,
    name text
);

insert into public.garbage_zones(name)
values ('Zone1'), ('Zone2'), ('Zone3');