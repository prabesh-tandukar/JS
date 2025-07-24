//Data types and type conversion

//Javascript has 8 data types: 7 primitive types + 1 non pritimive types

//Primitive data types (7)

//1. NUMBER

let age = 25; //Integer
let price = 99.99; //Float
let negative = -10; //Negative
let infinity = Infinity; //Sepcial number value
let nonANumber = NaN; //Not a number

//2. STRING

let name = "John Doe"; //Double quotes
// let email = 'john@email.com'; // We can use single quotes as well
let message = `Hello ${name}`; //Template literals (ES6)

//3. Boolean

let isActive = true;
let isDeleted = false;

//4. Undefined

let notAssigned; //undefined
let user = undefined; //explicitly undefined

//5. NULL

let deletedUser = null; //Intentionally empty

//6. Symbol (ES6)

let id = Symbol("id"); //Unique identifier
let anotherId = Symbol("id"); //Different from above

//7. BigInt (ES2020)

let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("123456789012345678901234567890");

//Non-Primitive Data Type

//8. Object

let userObj = {
  name: "John",
  age: 30,
  email: "John@email.com",
};

let numbers = [1, 2, 3, 4, 5]; //Arrays are objects
let today = new Date(); // Dates are objects
let regex = /pattern/g; // RegExp are objects

console.log(typeof 42); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object (this is a know bug)
console.log(typeof Symbol()); //"symbol"
console.log(typeof 123n); //bigint
console.log(typeof {}); // object
console.log(typeof []); //object
console.log(typeof function () {}); //function

//////////////////////////////

// TYPE CONVERSION VS TYPE COERCION

// Explicit Type Converion (Manual)

//String Conversion
let num = 123;
let str = String(num); //"123"
let str2 = num.toString(); //"123"

//Number Conversion
let str1 = "456";
let num1 = Number(str1); //456
let num2 = parseInt(str); //456
let float = parseFloat("45.67"); //45.67

//Boolean Conversion
let bool = Boolean(1); //true
let bool2 = Boolean(0); //false
let bool3 = Boolean(""); //false

//Implicit Type Coercion (Automatic)

//String Coercion
let result = "Customer " + 123; //"Customer 123"
let template = `User ${456}`; //"User 456"

//Number coercion
let math = "10" - 5; //5 (string to number)
let multiply = "3" * "4"; //12(both strings to numbers)
let addition = "10" + 5; //"105" (number to string!)

//Boolean coercion
if ("hello") {
} //true (non-empty string)
if (0) {
} //false(zero)
if ([]) {
} //true(empty array is truthy!)

// TRUTHY AND FALSY VALUES

//Falsy Values (8 total)

false; //Boolean false
0; //Number zero
-0; //Negative zero
0n; //Bigint zero
(""); //Empty string
//''; //Empty string single quote as well as double quotes
``; //Empty tempate literal
null; //Null
undefined; //undefined
NaN; //Not a number


//Truthy Values (Everything Else)

true; //boolean true
1, -1, 445; //Any non-zero number
"yoyo"; //Non-empty string
"0"; //String containing zero
[]; //Empty array (object)
{}; //Empty object
function(){}; //Functions

///////////////////

// EQUALITY COMPARISONS

//Loose equality (==) - with coercion

"5" == 5; //true (string coerced to number)
true == 1; //true (boolean coerced to number)
false == 0; //true (boolean coerced to number)
null == undefined; //true (special case)
"" == 0; //true (empty string coerced to 0)

// Strict Equality(===) - no coercion

"5" === 5; //false (different types)
true === 1; //false (different types)
false === 0; //False (different types)
null === undefined //false (different types)
"" === 0 //false (different types)

// Best practices

//BAD - Loose equality can cause bugs
if(userInput == 0) {
    //This matches "", false, "0", null, undefined!
}

//GOOD - Strict equality is predictable
if (userInput === 0) {
    //This only matches the number 0
}

//GOOD - Explicit conversion when needed
if(Number(userInput) === 0) {
    //Clearly convert then compare
}

//// COMMON TYPE CONVERSION PATTERNS IN CRM

//1. User Input Validation

function validateAge(input) {
    // Convert string input to number
    const age = Number(input);

    //Check if conversion was successful
    if(isNaN(age)) {
        return {valid:false, error: "Please enter a valid number"};
    }

    if (age < 0 || age > 150) {
        return {valid: false, error: "Please enter a realistic age"};
    }

    return {valid: true, value: age};
}

//Usage
const result1 = validateAge("25"); //{valid: true, value: 25}
const result2 = validateAge("abc"); //{valid: false, error: "...."}

//2. API Response handling

function processCustomerData(apiResponse) {
    //API might return strings instead of numbers
    const customer = {
        id: String(apiResponse.id), //Ensure string
        name: String(apiResponse.name || ""), //Default to empty string
        age: Number(apiResponse.age) || 0, //Default to 0
        isActive: Boolean(apiResponse.is_active), //Convert to boolean
        signupDate: new Date(apiResponse.signupDate) //Convert to date
    }

    return customer;
}

//3. Form Data Processing
function createCustomerFromForm(formData) {
    const customer = {
        name: formData.name.trim(), //Remove whitespace
        email: formData.email.toLowerCase().trim(), //normalize email
        phone: formData.phone.replace(/\D/g, ''), //Keep only digits
        age: parseInt(formData.age, 10) || null,
        isNewsletter: formData.newsletter === "true" //String to boolean
    };
    return customer;
}

// Common Type-related Bugs

//1. Array addtion bug

//wrong
let arr1 = [1,2];
let arr2 = [3,4];
let combined = arr1 + arr2; // "1,23,4" - string

//correct
let combined1 = [...arr1, ...arr2]; //[1,2,3,4] = array

//2. Null vs Undefined Confusion

//Wrong - treating them the same
if (user.phone == null) { //Matches both null and undefined
    //This might not be what you want
}

// BETTER - be explicit
if (user.phone === null || user.phone === undefined) {
    //Clear intent
}

// BEST - check for actual vallue
if (!user.phone) {//Checks for any falsy value
    //Usually what you actually want
}

//3. Number parsing Issues

//wrong - parseInt without radix
let num4 = parseInt("010"); //Might be 8 or 10 depending on JS engine

// CORRECT - always specify radix
let num5 = parseInt("010", 10); //Always 10

//BETTER - use Number() for decimal conversion
let num8 = Number("010"); //always 10, handles decimals too


// Assessment Questions

// Conceptual Questions:

//1. what's the difference between null and undefined ? Give a CRM exmaple where you'd use each

// null is a value we assign when we want to intentionally leave a variable empty. and undefined in most is value assigned to variables which is let to be initialized or which has only been declared. We can use null to assign values in customer personal info which the customer has not updated or given any input yet but should have value later on. And we can give undefined to values which are optional the customer might update or not update or something like that.

//2. Why does typeof null return "objedt" ? How would you properly check if a value is null ?

//TYpeof null returns object because that is an error due to how javascript was written initially. We would properly check the value of null with the strict operator ===.

//3. Explain the difference between == and ===. Give an example where using == could cause a bug in a CRM system.

// The == is loose equality meaning it compares two value with type coercion meaning it converts any value to truthy or falsy value and compares them where as === is called strict equality and compares the exact values. a == can cause a bug ina CRM system when dealing with a form input, maybe the user does not enter anything but a space in the form and submits and in the form validation if we use if (!userinput == false) but the string with a whitespace is taken as truthy then we will get a bug.

//4. what are three ways to convert a string to a number ? What are the differences between them

//first - Number("123"); second - parseInt("456"), third - parseFloat("456");
//the first number() method returns number in decimal number system.
//the parseInt() returns decimal or binary depending upon the js engine and the input given for example parseInt("010") might return 8 through binary or 10/
//the parseFloat returns a float 

console.log([] + []);     // "" (empty string)
console.log([] + {});     // "[object Object]"
console.log({} + []);     // "[object Object]" (or 0 in some contexts)
// Why this happens:

// [] + []: Both arrays convert to empty strings "", so "" + "" = ""
// [] + {}: Array becomes "", object becomes "[object Object]", so result is "[object Object]"
// {} + []: Similar conversion, object becomes "[object Object]"

// This shows why explicit type conversion is so important in JavaScript! Always be explicit about what you want instead of relying on coercion.