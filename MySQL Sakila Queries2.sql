use sakila;
SELECT * FROM actor;
select * from actor where first_name='JOHN';
select * from actor where last_name='NEESON';
select * from actor where actor_id%10=0;
select description from film where film_id=100;
select title from film where rating='R';
select title from film where rating!='R';
select * from film order by length limit 10;
select title from film;
select * from film where special_features='deleted scenes';
select last_name from actor group by last_name having count(last_name)=1;
select last_name from actor group by last_name having count(last_name)>1; 
select actor_id, count(actor_id) c from film_actor group by actor_id order by c desc limit 1;
select title, store_id, inventory_id from film f join inventory i on f.film_id=i.film_id;
SELECT r.return_date FROM rental r JOIN inventory i ON r.inventory_id=i.inventory_id JOIN film f ON f.film_id=i.film_id WHERE f.title='Academy Dinosaur';
SELECT AVG(length) FROM film;
SELECT category_id, AVG(length) FROM film_category fc JOIN film f ON fc.film_id=f.film_id GROUP BY category_id;
SELECT f.title FROM film f where f.description like '%robot%';
SELECT length, title FROM film WHERE length=(SELECT MAX(length) FROM film);
SELECT release_year
 