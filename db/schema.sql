-- DB setup

### Schema
/*create databease*/
CREATE DATABASE v3t78lyxu3y727zd;
USE v3t78lyxu3y727zd;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);