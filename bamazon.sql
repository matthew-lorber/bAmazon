DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_id INT NOT NULL,
  price DECIMAL(7,2) NULL,
  stock_quantity INT NULL,
  product_sales INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_id, price, stock_quantity, product_sales)
VALUES 
(48, 142, 0),
(87, 76, 0),
(90, 12, 0),
(123, 43, 0),
(67, 88, 0),
(90, 32, 0),
(84, 564, 0),
(231, 213, 0),
(55, 432, 0),
(77, 233, 0);
