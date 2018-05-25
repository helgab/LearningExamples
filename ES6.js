// ES 6

// Let, const, block scope:

let number;
let number = 12;
let age = 20;

{
let number = 22;
}

console.log(number);
console.log(age);

const name = "John";
const address;

{
  const name = "Tom";
}

// Arrow functions:

var getPrice = () => 5.99;
console.log(typeof getPrice()); //function
console.log(getPrice()); //5.99

var getPrice = count => count * 4.00;
console.log(getPrice(2)); // 8

var getPrice = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice(2, 0.7)); // 8.56

document.addEventListener('click', function() {
  console.log(this);
}) // #document

document.addEventListener('click', () => console.log(this)); // Window {}
// in ES6 this is not set to the element that is getting the event, but is set to the context of the code we are in

var invoice = {
  number: 123,
  process: function() {
    console.log(this);
  }
} 
invoice.process(); // Object { number: 123}

var invoice = {
  number: 123,
  process: () => console.log(this)
} 
invoice.process(); // Window {...}


var invoice = {
  number: 123,
  process: function() {
    return () => console.log(this.number);
  }
};
invoice.process()(); // 123

var newInvoice = {
  number: 456
};
invoice.process().bind(newInvoice)(); //123

// when using arrow functions you cannot change the value of this with bind

invoice.process().call(newInvoice); // 123

var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty("prototype")); // false
// in ES6 when we define a function with fat arrow, we do not have access to a prototype field

// Default function parameters:
var getProduct = function(productId = 1000) {
  console.log(productId);
};
getProduct(); // 1000

var getProduct = function(productId = 1000, type = "software") {
  console.log(productId + ',' + type);
};

getProduct(undefined, 'hardware'); // 1000, hardware

var getTotal = function(price, tax = price * 0.07) {
  console.log(price + tax);
};

getTotal(5.00); // 5.35

var baseTax = 0.07;
var getTotal = function(price, tax = price * baseTax) {
  console.log(price + tax);
};

getTotal(5.00); // 5.35
// When we setup a default we do have access to the variables in the context

var getBaseTax = () => 0.07;
var getTotal = function(price, tax = getBaseTax() * price) {
  console.log(price * tax );
};

getTotal(5.00); // 5.35

// Rest and spread

// Rest
var showCategories = function(productId, ...categories) {
    console.log(categories instanceof Array);
    console.log(categories);
}

showCategories(123, 'search', 'advertising'); // true ['search', 'advertising]
showCategories(123); // []

const someFunction = new Function("…categories", "return categories;");

console.log(someFunction('search', 'advertising'));
// -> [‘search’, ‘advertising’]

// Spread

var prices = [11, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice); // 20

var newPriceArray = [...prices];
console.log(newPriceArray); // [11, 20, 18]

var newArray =  Array(...[,,]);
console.log(newArray); // [undefined, undefined]

var newArray = [...[,,]];
console.log(newArray); // [undefined, undefined]

var maxCode = Math.max(..."43210");
console.log(maxCode); // 4

var array = ["A", ..."BCD", "E"];
console.log(array); // ["A", "B", "C", "D", "E"]

let a = 10, b = 5;
let c = [2, 4, 5];




