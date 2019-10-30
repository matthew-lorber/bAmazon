/* SUPERVISOR */

exports.supervisor = function() {

  require("dotenv").config();
  require("fs");
  require("moment");
  const rl = require('readline-sync');
  const keys = require("./keys.js");
  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: keys.server.host,
    port: keys.server.port,
    user: keys.server.user,
    password: process.env.password,
    database: keys.server.database
  });

  supervise();

  function supervise() {

    // SUPERVISOR MENU
    const view = ['View Product Sales by Department', 'Create New Department'],
        index = rl.keyInSelect(view, 'What would you like to do [number]?'),
        selection = view[index];

    if (selection === 'View Product Sales by Department') {
      viewSales();
    }
    else if (selection === 'Create New Department') {
      createNew();
    }
    else {
      connection.end();
      return;
    }

    // VIEW SALES BY DEPARTMENT
    function viewSales() {
      connection.query("DROP TABLE IF EXISTS temp_table;", function(err) {if (err) throw err; console.log("working...");});
      connection.query("CREATE TABLE temp_table AS SELECT department_name, SUM(product_sales) AS department_sales FROM products GROUP BY department_name;", function(err) {if (err) throw err;});
      connection.query("DROP TABLE IF EXISTS net_sales;", function(err) {if (err) throw err;});
      connection.query("CREATE TABLE net_sales AS SELECT overhead.department_id, overhead.department_name, overhead.overhead_costs, temp_table.department_sales, temp_table.department_sales - overhead.overhead_costs AS net_sales FROM overhead INNER JOIN temp_table ON overhead.department_name = temp_table.department_name;", function(err) {if (err) throw err;}); 
      connection.query("SELECT * FROM net_sales;", function(err, results) {if (err) throw err;
      console.table(results);
      supervise();
      });
    }

    // CREATE NEW DEPARTMENT
    function createNew() {
      var add_department_name = rl.question('\nNew Department Name[string]: ');
      var add_overhead = rl.question('\nNew Department Overhead Costs [number]: ');
      connection.query("INSERT INTO overhead (department_name, overhead_costs) VALUES ('" + add_department_name + "', " + add_overhead + ");");
      supervise();
    }
  }
}

