/* MAIN JAVASCRIPT */
    
const rl = require('readline-sync');
console.clear();
console.log('WELCOME TO BAMAZON SHOES WHOLESALE');

const view = ['CUSTOMER', 'MANAGER', 'SUPERVISOR'],
    index = rl.keyInSelect(view, 'Who would you like to be? ');

var selection = view[index];

if (selection === 'CUSTOMER') {
    const CUSTOMER_MOD = require("./export-customer.js");
    CUSTOMER_MOD.customer();
}

if (selection === 'MANAGER') {
    const MANAGER_MOD = require("./export-manager.js");
    MANAGER_MOD.manager();
}

if (selection === 'SUPERVISOR') {
    const SUPERVISOR_MOD = require("./export-supervisor.js");
    SUPERVISOR_MOD.supervisor();
}
