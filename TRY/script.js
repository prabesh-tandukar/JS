//function
function greet(name) {
  return `Hello, ${name}!`;
}

// console.log(greet("prabesh"));

//function with multiple parameters
function add(a, b) {
  return a + b;
}

//function with default parameters
function introduce(name, age = 25) {
  return `I'm ${name}  and i'm ${age} years old`;
}

//Function expressions

const multiply = function (x, y) {
  return x * y;
};

// console.log(multiply(2, 3));

// const multiplyy = function mult(x, y) {
//   return x * y;
// };

// console.log(multiplyy(4, 4));

// console.log(mult(4, 4));

//Anonymous function assigned to variable
const sayHello = function () {
  console.log("Hello");
};

//Arrow functions

//Arrow functions provide a shorter syntax and have different behavior with this.

//basic arrow function
const square = (x) => x * x;

//with multiple parameters
const substract = (a, b) => a - b;

//with single parameter (parentheses optional)
const double = (x) => x * 2;

// with no parameters
const getRandomNumber = () => Math.random();

//with function body (need return statement)
const processData = (data) => {
  const processed = data.map((item) => item * 2);
  return processed;
};

//Key differences between regular and arrow functions

//1. this binding

const obj = {
  name: "Alice",
  regularFunction: function () {
    console.log(this.name); //"Alice"
  },
  arrowFunction: () => {
    console.log(this.name); // undefined or global context
  },
};

//2. Hoisting

//This works - function declarations are hoisted
console.log(regularFunc()); // "I'm hoisted!"

function regularFunc() {
  return "I'm hoisted!";
}

//This doesn't work - arrow functions are not hoisted
//console.log(arrowFunc()); //Error: cannot access 'arrowFunc' before initialization
const arrowFunc = () => "I'm not hoisted";

//3. ArgumentsObject

function regularFunction() {
  console.log(arguments); //Available
}

const arrowFunction = () => {
  console.log(arguments); //Error: arguments is not defined
};

//
//
//Higher Order functions

//Functions that take other functions as parameters or return functions

//
//FUnctions that takes another fucntion as parameter
function processArray(arr, callback) {
  return arr.map(callback);
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, (x) => x * 2);

//Function that returns another function
const createMultiplier = (factor) => {
  return (number) => number * factor;
};

const multipleByFour = createMultiplier(4);
console.log(multipleByFour(5));

////
//Array methods with functions

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

//map - transforms each element
const names = users.map((user) => user.name);
console.log(names);

//filter = selects elements based on condition
const adults = users.filter((user) => user.age >= 30);
console.log(adults);

//find - finds first matching element
const jane = users.find((user) => user.name === "Jane");
console.log(jane);

//reduce - accumulates values
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);

//Function scope and closures
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y; //inner function has access to outer function's variables
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

const createCounter = () => {
  let count = 0;
  return () => ++count;
};

const counter = createCounter();
console.log(counter());
console.log(counter());

const twice = (func) => (x) => func(func(x));
const addOne = (x) => x + 1;
const result = twice(addOne)(5);
console.log(result);

//Practice Exe
//Exe 1: basic function conversion
//Convert these regular functions to arrow functions

function greet(name) {
  return `Hello, ${name}!`;
}

const arrowGreet = (name) => `Hello, ${name}!`;

console.log(greet("prabesh"));
console.log(arrowGreet("prabesh"));

//Exe 2: Array methods practice
//Given this array of products:

const products = [
  { name: "Laptop", price: 999, category: "Electronics" },
  { name: "Phone", price: 699, category: "Electornics" },
  { name: "Shirt", price: 29, category: "Clothing" },
  { name: "Headphones", price: 199, category: "Electronics" },
];

//Write functions to:
//1. Get all product names
const productNames = products.map((product) => product.name);
console.log(productNames);

//2. Get all products under $200
const under200 = products.filter((product) => product.price < 200);
console.log(under200);

//3. Calculate total price of all products
const totalPrice = products.reduce((sum, product) => product.price + sum, 0);
console.log(totalPrice);

//find the most expensive product
const exp = products.reduce((max, current) => {
  return current.price > max.price ? current : max;
});

////////////////////////////////////
//2. Objects
//Objects are fundamental in React for props,state and data handling

//Basic Object Syntax

//Object creation
const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  isActive: true,
};

//Accessing properties
console.log(user.name); //john
console.log(user["email"]); //john@example.com

//Adding/updating properties
user.city = "New York";
user.age = 31;

//Objects methods (functions as properties)

const user = {
  name: "John",
  age: 30,

  //Method using regular function
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },

  //Method using arrow function (careful with 'this'!)
  getAge: () => {
    return this.age; //this won't work as expected
  },

  //es6 method shorthand (recommended)
  introduce() {
    return `I'm ${this.name}, ${this.age} years old`;
  },
};

//Object Destructuring (critical for react)

const user = {};
