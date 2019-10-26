/* CLEAR WINDOW, WELCOME USER AND LOAD REQUIREMENTS */
console.clear();
console.log("\u0030\uFE0F\u20E3  WELCOME TO TOP SONGS\n");
var inquirer = require("inquirer");
var mysql = require("mysql");

/* RETREIVE DATABASE PASSWORD FROM ENVELOPE */
require("dotenv").config();
var keys = require("./keys.js");
var pw = keys.homeworkdb.password;

/* DEFINE NEW DATABASE CONNECTION */
var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: pw,
database: "top_songsDB"
});

/* CONNECT TO NEW CONNECTION */
connection.connect(function(err) {
    if (err) throw err;

/* 
(1) A query which returns all data for songs sung by a specific artist
(2) A query which returns all artists who appear within the top 5000 more than once
(3) A query which returns all data contained within a specific range
(4) A query which searches for a specific song in the top 5000 and returns the data for it
*/

// (1) "SELECT * FROM top5000 WHERE artist LIKE '"+artist+"';
// (2) "SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*)>1";
// (3) "SELECT * FROM top5000 WHERE item_id BETWEEN x AND y";
// (4) "SELECT * FROM top5000 WHERE ?";

    inquirer
    .prompt({
      name: "findThis",
      type: 'input',
      message: "Enter artist name"
    })
    .then(function(answer) {
        var artist = JSON.stringify(answer).toString().split('"')[3];
        console.log(artist);
        connection.query("SELECT * FROM top5000 WHERE artist LIKE '"+artist+"';", function(err, res) {
            if (err) throw err;
            console.table(res);
            console.log("\n\n");
            connection.end();
        });
    });
});
    
    
