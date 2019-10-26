DROP DATABASE IF EXISTS purchases;
CREATE DATABASE purchases;
USE purchases;

CREATE TABLE items_purchased (
	order_id INT NOT NULL AUTO_INCREMENT,
	when_purchased DATETIME NOT NULL,
	item VARCHAR(45) NULL,
	quantity YEAR NOT NULL,
	unit_price DECIMAL(10, 4) NOT NULL,
	total_price DECIMAL(10, 4) NOT NULL,
	PRIMARY KEY (order_id)
);