/* APPLICATION START */
console.clear();
console.log("\u0030\uFE0F\u20E3  WELCOME TO BAMAZON\n");

// LOAD REQUIREMENTS
var inquirer = require("inquirer");
var mysql = require("mysql");
require("dotenv").config();
var keys = require("./keys.js");


// fs for outputting terminal to .txt file
//var fs = require("fs");
// moment for date transformation
//var moment = require("moment");


/* RETREIVE DATABASE PASSWORD FROM ENVELOPE */
var pw = keys.homeworkdb.password;

/* DEFINE NEW DATABASE CONNECTION */
var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: pw,
database: "bamazon"
});

/* CONNECT TO NEW CONNECTION */
connection.connect(function(err) {
  if (err) throw err;
    
  /* DISPLAY INVENTORY */
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
});

/* USER INPUT ITEM AND QUANTITY TO PURCHASE */  
inquirer
.prompt({
  name: "selectItem",
  type: "input",
  message: "Enter the item_id you would like to buy, or type EXIT to quit"
})
.then(function(val) {
  if (val.selectItem === "EXIT") {
    connection.end();
    return;
  }
  else {
    inquirer
    .prompt({
      name: "howMany",
      type: "input",
      message: "Enter quantity of units to buy, or type EXIT to quit"
    })
    .then(function(num) {
      if (num.howMany === "EXIT") {
        connection.end();
        return;
      }
      else {
        // QUERY TO SEE IF THAT MANY AVAILABLE OF THAT ITEM
        var query = "SELECT * FROM products WHERE ?", {item_number = }
        //"UPDATE bamazon.products SET stock_quantity = stock_quantity - 3 WHERE item_id = 4;"
        inquirer
        .prompt({
          name: "confirmPurchase",
          type: "input",
          message: "Confirm purchase of " + num.howMany + " " + val.selectItem + " by entering YES, or type EXIT to quit"
        })
        .then(function(confirm) {
          if (confirm.confirmPurchase !== "YES") {
            connection.end();
            return
          }
          else {
            buyItems(num.howMany, val.selectItem);
          }
        });
      }
    });
  }
});
// ADDITIONAL SPACING BECAUSE THE TERMINAL DOESN'T SPACE THE PROMPT OUTPUT CORRECTLY
console.log("\n");
  
/* BUY ITEMS */
function buyItems(item, quantity) {
  console.log("buying items ", item, quantity);
  
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
  connection.query(

,
  function(err, res) {
    if (err) throw err;
    console.log("purchased", quantity, "of item", item,"successfully!");
    connection.query(
      "SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
      }
    )    
    connection.end();
  });
} 
