/* CUSTOMER */

exports.customer = function() {

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

  customer();

  function customer() {

    // SUPERVISOR MENU
    const view = ['Shop'],
    index = rl.keyInSelect(view, 'What would you like to do [number]?'),
    selection = view[index];

    if (selection === 'Shop') {
      showProducts();
    }
    else {
      connection.end();
      return;
    }

    function showProducts() {
      connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      console.log("\nHere's what we have on offer");
      console.table(results);
      askCustomer();
      });
    }

  function askCustomer() {

    var item = rl.question('\nWhat product would you like to buy? [item_id number][enter 0 to quit] ');
    if (parseInt(item) === Number(0)) {connection.end();return;}

    var numRequested = rl.question('How many would you like? [number][enter 0 to quit] ');
    if (parseInt(numRequested) === Number(0)) {connection.end();return;}

    connection.query("SELECT stock_quantity FROM products WHERE item_id = " + item, function(err, amount) {  
      if (err) throw err;
      var onHand = parseInt(JSON.stringify(amount).split(":")[1].split("}")[0]);
      if (numRequested < onHand) {
        connection.query("UPDATE products SET stock_quantity = stock_quantity - " + numRequested + " WHERE item_id = " + item + ";");
        connection.query("SELECT price FROM products WHERE item_id = " + item, function(err, unit_price) {
          if (err) throw err;
          var costEach = parseInt(JSON.stringify(unit_price).split(":")[1].split("}")[0]);
          var total = numRequested * costEach;
          connection.query("UPDATE products SET product_sales = product_sales + " + total + " WHERE item_id = " + item + ";");
          console.log("Your total is " + total + ". Thank you for shopping bAmazon!");
          customer();
        });

      } else {
        console.log("Insufficient quantity!");
        customer();
      }
    });
  }
}
}

