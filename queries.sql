-- DROP DATABASE IF EXISTS bamazon;
-- CREATE DATABASE bamazon;
-- USE bamazon;

-- DROP TABLE IF EXISTS products;
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(7,2) NULL,
  stock_quantity INT NULL,
  product_sales DECIMAL(10, 4),
  PRIMARY KEY (item_id)
);

-- CREATE TABLE departments (
--   department_id INT NOT NULL AUTO_INCREMENT,
--   department_name VARCHAR(45) NULL,
--   overhead_costs DECIMAL(7,2) NULL,
--   department_sales DECIMAL(7,2) NULL,
--   PRIMARY KEY (department_id)
-- );

-- CREATE TABLE overhead (
--   department_id INT NOT NULL AUTO_INCREMENT,
--   department_name VARCHAR(45) NULL,
--   overhead_costs DECIMAL(7,2) NULL,
--   PRIMARY KEY (department_id)
-- );

INSERT INTO overhead (department_name, overhead_costs) VALUES ("casual", 21000), ("hikers", 13000), ("dress", 12000), ("street", 17000);
SELECT * FROM overhead;

-- INSERT INTO departments (department_name, overhead_costs, department_sales) VALUES (x, y, z), (a,b,c);


-- UPDATE products SET department_name = "cross" WHERE item_id = 1;
-- SELECT * FROM products WHERE stock_quantity < 134;
-- SELECT * FROM overhead;

-- ALTER TABLE products ADD COLUMN product_sales DECIMAL(10, 4) NOT NULL AFTER stock_quantity;

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES 
('aviator', 'casual', 248, 142, 10000),
('topic', 'casual', 87, 376, 0),
('guided', 'hikers', 90, 412, 5000),
('form', 'hikers', 123, 343, 0),
('suave', 'dress', 64, 288, 0),
('sombre', 'dress', 90, 232, 0),
('madras', 'dress', 84, 264, 0),
('antidote', 'street', 231, 213, 0),
('exhibit', 'street', 75, 232, 0),
('conventional', 'street', 177, 233, 0);

DELETE FROM products WHERE item_id = 11;

DROP TABLE IF EXISTS temp_table;
CREATE TABLE temp_table AS SELECT department_name, SUM(product_sales) AS department_sales FROM products GROUP BY department_name;
select * from temp_table;

DROP TABLE IF EXISTS net_sales;
CREATE TABLE net_sales AS SELECT overhead.department_id, overhead.department_name, overhead.overhead_costs, temp_table.department_sales, temp_table.department_sales - overhead.overhead_costs AS net_sales FROM overhead INNER JOIN temp_table ON overhead.department_name = temp_table.department_name;
SELECT * FROM net_sales;


