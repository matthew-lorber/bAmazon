DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_id INT NOT NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(7,2) NULL,
  stock_quantity INT NULL,
  product_sales INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_id, department_name, price, stock_quantity, product_sales)
VALUES 
("aviator", "footwear", 48, 142, 0),
("topic", "footwear", 87, 76, 0),
("guided", "footwear", 90, 12, 0),
("suave", "footwear", 123, 43, 0),
("conventional", "footwear", 67, 88, 0),
("madras", "footwear", 90, 32, 0),
("antidote", "footwear", 84, 564, 0),
("form", "footwear", 231, 213, 0),
("exhibit", "footwear", 55, 432, 0),
("sombre", "footwear", 77, 233, 0);
