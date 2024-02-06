// DAY-10 Assignment

// If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.

const age = 10;

console.log(age >= 18 ? "You are allowed to Marry" : `${18 - age} years needs to wait for marry` );

// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.

const myAge = 22;
const yourAge = 30;
console.log(myAge > yourAge? "my age is greater than your age" : `You are ${yourAge - myAge} years older than me`);

// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.

if(myAge > yourAge) {

    console.log("yourAge is greater than myAge ");

}else {

    console.log("myAge is less than yourAge");
}

console.log(myAge > yourAge ? "yourAge is greater than myAge " : "myAge is less than yourAge");

// 4. Check, if a number is even or not.

const number = 10;
console.log(number % 2 === 0? "number is even" : "number is odd");

// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const grade = 67;
console.log(grade >= 80 && grade <= 100? "A" : grade >= 70 && grade <= 89? "B" : grade >= 60 && grade <= 69? "C" : grade >= 50 && grade <= 59? "D" : grade >= 0 && grade <= 49? "F" : "Invalid grade");

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer

const currentMonth = 'February';

switch(currentMonth) {

    case 'January': console.log("Winter");
    break;
    case 'February': console.log("Winter");
    break;
    case 'March': console.log("Summer");
    break;
    case 'April': console.log("Summer");
    break;
    case 'May': console.log("Summer");
    break;
    case 'June': console.log("Summer");
    break;
    case 'July': console.log("Rainy");
    break;
    case 'August': console.log("Rainy");
    break;
    case 'September': console.log("Rainy");
    break;
    case 'October': console.log("Rainy");
    break;
    case 'November': console.log('Winter');
    break;
    case 'December': console.log('Winter');
    break;
}
// 7. Check if a day is Weekend day or a working day. Your script will take day as an input.

const todaysDay = "Tuesday";

switch(todaysDay) {

    case 'Monday': console.log("Working day");
    break;
    case 'Tuesday': console.log("Working day");
    break;
    case 'Wednesday': console.log("Working day");
    break;
    case 'Thursday': console.log("Working day");
    break;
    case 'Friday': console.log("Working day");
    break;
    case 'Saturday': console.log("Weekend day");
    break;
    case 'Sunday': console.log("Weekend day");
    break;
}


// 8. Write a program which tells the number of days in a month.


switch(currentMonth) {

    case 'January': console.log("31");
    break;
    case 'February': console.log("28");
    break;
    case 'March': console.log("31");
    break;
    case 'April': console.log("30");
    break;
    case 'May': console.log("31");
    break;
    case 'June': console.log("30");
    break;
    case 'July': console.log("31");
    break;
    case 'August': console.log("31");
    break;
    case 'September': console.log("30");
    break;
    case 'October': console.log("31");
    break;
    case 'November': console.log("30");
    break;
    case 'December': console.log("31");
    break;
}

// 9. Write a program to check whether the year is leap year or not.

const currentYear = 2024;

if(currentYear % 400 === 0) {

    console.log(`${currentYear} is a leap year`);
}else if(currentYear % 4 === 0 && currentYear % 100 === 0) {

    console.log(`${currentYear} is a leap year`)
}else {

    console.log(`${currentYear} is not a leap year`);
}


// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.

console.log(true ? true ? "A" : "B" : true ? "C" : "D");
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.

console.log(true ? true ? "A" : "B" : true ? "C" : "D");


// 11. What will be the result of the following nested ternary expression:
let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';

console.log(result); // D
