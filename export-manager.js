/* MANAGER */

exports.manager = function() {

  require("dotenv").config();
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

  connection.connect();
  selector();

  /* SELECTOR */
  function selector() {

    var view = ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
    index = rl.keyInSelect(view, 'What would you like to do?');
    var selection = view[index];
    
    if (selection === 'View Products for Sale') {
      viewForSale();
    }
    else if (selection === 'View Low Inventory') {
      viewLow();
    }
    else if (selection === 'Add to Inventory') {
      addToInventory();
    }
    else if (selection === 'Add New Product') {
      addNewProduct();
    }
    else {
      selector();
    }

    // VIEW PRODUCTS FOR SALE
    function viewForSale() {
      connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      console.log("\nHere's what we have on offer");
      console.table(results);
      selector();
      });
    }

    // VIEW LOW INVENTORY
    function viewLow() {
      var whatIsLow = rl.question('\nWhat is the low inventory number today? [number] ');
      connection.query("SELECT * FROM products WHERE stock_quantity < " + whatIsLow + ";", function(err, results) {
      if (err) throw err;
      console.log("\nHere is what's lower than ", whatIsLow);
      console.table(results);
      selector();
      });
    }

    // ADD TO INVENTORY
    function addToInventory() {
      connection.query("SELECT * FROM products WHERE stock_quantity < " + whatIsLow + ";", function(err, results) {
      if (err) throw err;
      console.log("\nCurrent Inventory < ", whatIsLow);
      console.table(results);
      selector();
      });
      var add_what = rl.question('\nEnter item_id [number]: ');
      var add_quantity = rl.question('\nStock Quantity to Add [number]: ');
      connection.query("UPDATE products SET stock_quantity = stock_quantity + " + add_quantity + " WHERE item_id = " + add_what + ";");
      console.log("Updated ", add_what, " with ", add_quantity, " units.");
      selector();
    }

    // ADD NEW PRODUCT
    function addNewProduct() {
      var add_what = rl.question('\nProduct to add [string]: ');
      var add_department = rl.question('\nDepartment [string]: ');
      var add_price = rl.question('\nUnit Price [number]: ');
      var add_available = rl.question('\nQuantity Available [number]: ');
      connection.connect();
      connection.query("INSERT INTO products ('product_name', 'department_name', 'price', 'stock_quantity', 'product_sales') VALUES ('" + add_what + "', '" + add_department + "', '" + add_price + "', '" + add_available + "');");
      selector();
    }
  }
}

