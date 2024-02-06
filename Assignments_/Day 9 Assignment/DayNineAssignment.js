// Day - 9 Assignment

// Check if type of '70' is equal to 70

if(typeof '70' == typeof 70) {

    console.log("Types of '70' and 70 are same");
}else {

    console.log("Types of '70' and 70 are different");
}

console.log(Number.parseInt('8.8')); // 8 not 9
if(Number.parseInt('8.8') == 9) {

    console.log("parseInt('8.8') is equal to 9");
}else {

    console.log("parseInt('8.8') is equal to 9 is not same");
}
// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.

const acountBalace = 0; // 0 is falsy value
const nickName = ""; // "" empty string have falsy value
const isIndependent = false; // false is falsy value
const nullValue = null; // null is falsy value
const isinfinity = NaN; // NaN is falsy value
const undefinedValue = undefined; // undefined is a falsy value

// Write five JavaScript statement which provide truthy  value.

const highestScore = 300; // non 0 numbers are always repersents the truthy values
const perscivingEngineering = true; // true is always a thuthy value
const countryName = "India"; // non empty string is always repersents the truthy values
const studetMarks = [10, 20, 30, 40, 50, 60];
const person = {

    name : "Vikas Kare",
    age : 23,
    email : "vikas.kare@codias.com",
    address : "Pune, Pune, Maharashtra, India"
};

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 5 > 4

console.log(5 > 4 ? "5 is greater than 4" : "5 is not greater than 4"); // true
// 4 >= 3

console.log(4 >= 3 ? "4 is greater than 3" : "4 is not greater than and equal to 3"); // true
// 4 < 3

console.log(4 < 3 ? "4 is less than 3 " : "4 is greater than 3" ); // false

// 4 <= 3

console.log(4 <= 3 ? "4 is less than and equal to 3 " : "4 is greater than 3"); // false

// 5 == 5

console.log(5 == 5 ? "5 is equal to 5 " : " 5 is not equal to 5"); // true 

// 9 === 9

console.log(9 === 9 ? "9 is equal than 9 " : " 9 is not equal to 9"); // true

// 9 == '9'

console.log(9 == '9' ? "9 is equal to '9' " : " 9 is not equal to '9'"); // true (== equality checking operator)

// 8 === '8'

console.log(8 === '8'? "8 is equal to '8'" : "8 is not equal to '8'"); // false (=== type checking operator)
// 4 != 4

console.log(4 != 4 ? "4 is not equal to 4" : "4 is equal to 4"); //false

// 4 !== 4

console.log(4 !== 4 ?  "4 is not equal to 4" : "4 is equal to 4"); // false

// 4 != '4'

console.log(4 != '4' ? "4 is not equal to 4" : "4 is equal to 4");  // false
 
// 4 !== '4'

console.log(4 !== '4' ?  "4 is not equal to 4" : "4 is equal to 4"); // false

// Find the length of python and jargon and make a falsy comparison statement.

const pythonLength = "Python".length;
const jargonLength = "Jargon".length;

if(pythonLength !== jargonLength) {

    console.log("python and jargon lengths are not same");

}else  {

    console.log('Lengths are same')
}
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 (true && true -> true) AND

console.log(4 > 3 && 10 < 12 ? " Both Conditions are true" : " any one or both Conditions false");

// 4 > 3 && 10 > 12 (true && false -> false) AND

console.log(4 > 3 && 10 > 12 ? " Both Conditions are true " : "any one or both Conditions false  ");

// 4 > 3 || 10 < 12 (true || true -> true) -- Logical OR

console.log(4 > 3 || 10 < 12 ? "either one is true" : "both Conditions false");

// 4 > 3 || 10 > 12 -> true

console.log(4 > 3 || 10 > 12 ? "either one is true " : "both Conditions false");

// !(4 > 3) --> false

console.log( !(4 > 3) ? true : false);

// !(4 < 3)
console.log( !(4 > 3) ? true : false);

// !(false) --> true

console.log(!(false)? true : false);

// !(4 > 3 && 10 < 12)

console.log(!(4 > 3 && 10 < 12)? true : false);

// !(4 > 3 && 10 > 12) --> true

console.log(!(4 > 3 && 10 > 12)? true : false);

// !(4 === '4') --> true

console.log(!(4 === '4')? true : false);

// There is no 'on' in both dragon and python

const dragon = "Dragon";
const python = "Python";

if(dragon.includes("on") && python.includes("on")) {

    console.log("both dragon and python have 'on' in them");

}else  {

    console.log("dragon and python do not have 'on' in them");
}