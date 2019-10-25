# **bAmazon**

A little info about your project and/ or overview that explains **what** the project is about.
In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.

## Motivation
A short description of the motivation behind the creation. This should cover **why** the project exists and what drove you to choose this project.

## Technologies & Languages

<b>Technologies</b>


* [Heroku](https://www.heroku.com/) is utilized for database provisioning
* [Live Sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass#review-details) SCSS to CSS transpiler
* [MySQL](https://www.mysql.com) relational database management system
* [Node.js](https://nodejs.org/) runtime environment
* [NPM](https://www.npmjs.com/) package manager for runtime libraries
* [VS Code](https://code.visualstudio.com/) source code editor

<b>Languages</b>


* [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) Unix shell and command language
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) web markup language
* [JavaScript](https://www.javascript.com/) scripting language
* [JQuery](https://jquery.com/) HTML DOM traversal and manipulation
* [R](https://www.r-project.org/) language for data analysis
* [Sass](https://sass-lang.com/) style sheet language
* [SQL](https://en.wikipedia.org/wiki/SQL) backend database manipulation
* [Velocity.js](http://velocityjs.org/) client-side scripting of web animations

## Standout Features
For this project, I interpolated in R an optimization algorithm devised by [Michael Veksler](https://www.quora.com/profile/Michael-Veksler) as well as developed a grep based on the same compression(? this what I call it?) (algebraic version and R interpolation are listed in the **Code Example** section)

 _When average Americans consider numbers, they think of the digits 0-9. A better way to store decimal numbers is in hexadecimal numbers, base-16, or digits 0-15 decimal. , utilizing four bits per digit. For scale, one ASCII character (letter, digit, punctuation) needs 8 bits. A more elegant use of storage space is to group digits into threes and store every group of three digits in 10 bits. The **funny thing is**, using 10 bits is enough, since they can represent values in the range 0-1023. That's about 3.333 bits per decimal digit, instead of 4. Converting the whole number to binary, which would be optimal, will save you **2.4%** on average (assuming an even distribution of the digits, **0.248 ± 0.045, [n]={0,…,1023}** )._

## Screenshots
Include logo/demo screenshot etc.

## Code Example
Show what your project does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## How to use?
### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -

* If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

- - -

### Challenge #2: Manager View (Next Level)

* Create a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View all Inventory and Emphasize Low Inventory
    
    * Add to Inventory
    
    * Add New Product

    * Discontinue a Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

- - -

* If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.

- - -

### Challenge #3: Supervisor View (Final Level)

1. Create a new MySQL table called `departments`. Your table should include the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)

2. Modify the products table so that there's a product_sales column, and modify your `bamazonCustomer.js` app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.

   * Make sure your app still updates the inventory listed in the `products` column.

3. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:

   * View Product Sales by Department
   
   * Create New Department

4. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

5. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

6. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.

   * Hint: You may need to look into aliases in MySQL.

   * Hint: You may need to look into GROUP BYs.

   * Hint: You may need to look into JOINS.

   * **HINT**: There may be an NPM package that can log the table to the console. What's is it? Good question :)

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project. 

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Yourname]()

## Project title and Deployed Link
A little info about your project and/ or overview that explains **what** the project is about.

## Motivation
A short description of the motivation behind the creation. This should cover **why** the project exists and what drove you to choose this project.

## Technologies used and why
Ex. -

<b>Built with</b>
- [React](https://reactjs.org/)
<b>is a lightweight front end library that allowed me to create highly reusable components I could use across my application<b>

## Features
What makes your project stand out?

## Screenshots
Include logo/demo screenshot etc.

## Code Example
Show what your project does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project. 

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

[MIT](https://opensource.org/licenses/MIT) © [Matthew Lorber](https://github.com/matthew-lorber)

# Node.js & MySQL

## Overview



## Submission Guide

Make sure you use the normal GitHub. Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include screenshots, a gif, and/or a video showing us that you got the app working with no bugs. You can include these screenshots or a link to a video in a `README.md` file.

* Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works. 

* Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.

### Submission on BCS

* Please submit the link to the Github Repository!

## Instructions



### Reminder: Submission on BCS

* Please submit the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create your README.md

For the remainder of the homeworks throughout the course you will be required to create a README.md covering a few points about the homework/project.

* [How to Make a README](HowToREADME.md)

* [Sample README](sampleREADME.md)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**
