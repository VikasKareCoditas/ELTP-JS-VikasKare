

/*
    Create file and use the JavaScript typeof operator 
    to check different data types. Check the data type of each variable

*/

// Number 
const integer = 100;
console.log(typeof integer);  // number

const float = 100.0;
console.log(typeof float); // number

const double = 100.0092;
console.log(typeof double); // number

const long = 1234234; 
console.log(typeof long); // number

// String

const string = "This is a string";
console.log(typeof string); // string

const singleCharString = 'a';
console.log(typeof singleCharString); // string

// Boolean
 
let checkedIn = true;
console.log(typeof checkedIn); // boolean

let checkedOut = false;
console.log(typeof checkedOut); // boolean

// Undefined

let undefinedVariable = undefined; // Not a good practice to define undefined variable like this
console.log(typeof undefinedVariable); // undefined


// null 

let nullVariable = null;
console.log(typeof (nullVariable)); // object


// BigInt

const bigInt = 1284753942345345234535n;
console.log(typeof bigInt);  // bigint


// Symbol

const symbol = Symbol('--');
console.log(typeof symbol);

// array 

const numbersArray = [1, 2, 3, 4, 5, 6, 7];
console.log(typeof numbersArray); // object


// object 

const cityInfo = {

    name : "Pune",
    pincode : 411041,
    state : "Maharashtra",
    country : "India"
};
console.log(typeof cityInfo); // object

// function

// A simple function that returns the the type of number is class number or not
function isNumber (number) {

    return (typeof number) === 'number';
}

// console.log(isNumber(10));
console.log(typeof isNumber); // function 

