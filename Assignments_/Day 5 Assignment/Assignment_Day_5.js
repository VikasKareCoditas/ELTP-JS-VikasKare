// Declare a variable and assign a value 'Easy JavaScript Assignments'.


const JSAssignmentString = "Easy JavaScript Assignments";


// Print the length of the string.
console.log(JSAssignmentString.length); // 27


// Change all the string characters to capital letters using toUpperCase() method

const upperCasedString = JSAssignmentString.toUpperCase(); 
console.log(upperCasedString); // EASY JAVASCRIPT ASSIGNMENTS


// Change all the string characters to lowercase letters using toLowerCase() method

const lowerCasedString = JSAssignmentString.toLowerCase(); 
console.log(lowerCasedString); // easy javascript assignments


// Slice out the first word of the string using substr() and substring() method

// using slice(startIndex, endIndex) -> string --- method
const sliceOfStringWihSliceMethod = JSAssignmentString.slice(0, 4); // form index 0(included) to index 4(excluded) gets 'Easy' first word
console.log(sliceOfStringWihSliceMethod);

// using substr(startIndex, endIndex) -> string--- method

const sliceOfStringWithsubstrMethod = JSAssignmentString.substr(0, 4);
console.log(sliceOfStringWithsubstrMethod);


// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..

const sliceOfJavaScriptAssignmentspharase = JSAssignmentString.slice(5, JSAssignmentString.length);
console.log(sliceOfJavaScriptAssignmentspharase);


// Check if the string contains a word Script using includes() method

const checkStringConstainsStcript = JSAssignmentString.includes("Script");
console.log("Does Contains Script", checkStringConstainsStcript); // returns true


// Split the string into an array using split() method

const arrayOfString = JSAssignmentString.split();
console.log(arrayOfString); // [ 'Easy JavaScript Assignments' ]


// Split the string 'Easy JavaScript Assignments' at the space using split() method

const arrayofStringWithSpaceAsDelimeter = JSAssignmentString.split(" ");
console.log(arrayofStringWithSpaceAsDelimeter); // [ 'Easy', 'JavaScript', 'Assignments' ] 

// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.

let trainingBatch3ToSplit = "ELTP, BATCH, THREE";

trainingBatch3ToSplit = trainingBatch3ToSplit.split(',');

console.log(trainingBatch3ToSplit); // [ 'ELTP', 'BATCH', 'THREE' ]


// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.

console.log(JSAssignmentString.replace('JavaScript', 'Python'));

// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.

console.log("Character at index 20 : " , JSAssignmentString.charAt(20)); // g


// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(JSAssignmentString.charCodeAt("J")); // 69

// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log("first occurrence(index) of 'a'" + JSAssignmentString.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log("last occurrence of 'a'" + JSAssignmentString.lastIndexOf('a')); // 8

// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'

console.log('Easy JavaScript Assignments, Easy Easy'.indexOf('Easy')); // 0


// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'

console.log('Easy JavaScript Assignments, Easy Easy'.lastIndexOf('Easy')); // 34

// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'

console.log('Easy JavaScript Assignments, Easy Easy'.search('Easy')); // 0

// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '

console.log('       Easy JavaScript Assignments, Easy Easy             '.trim()); // Easy JavaScript Assignments, Easy Easy

// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true

console.log("Easy JavaScript Assignments".startsWith('Easy')); // true

// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true

console.log("Easy JavaScript Assignments".endsWith('Assignments')); // true

// Use match() method to find all the a’s in 'Easy JavaScript Assignments'

console.log("Easy JavaScript Assignments".match('a'));

// Use concat() and merge 'Easy' and 'JavaScript' to a single string.

console.log("Easy".concat('JavaScript'));  // EasyJavaScript

// Use repeat() method to print 'Easy JavaScript' 3 times.

console.log('Easy JavaScript'.repeat(3)); //  Easy JavaScriptEasy JavaScriptEasy JavaScript

// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.

const sentence = 'Javascript is Easy, too Easy, too Easy, Easy to learn';

const sentenceWithoutCommas = sentence.replaceAll(',', '');
console.log(sentenceWithoutCommas);
const arrayString = sentenceWithoutCommas.split(' ');
console.log(arrayString);
let easyCount = 0;

for(let index in arrayString) {

    if(arrayString[index] == 'Easy') {

        easyCount += 1;
    }
}
console.log(easyCount); // 4

// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'

const countWithMatch = 'Javascript is Easy, too Easy, too Easy, Easy to learn'.match(/Easy/g);

console.log(countWithMatch.length); // 4

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y;

const sentenceToClean = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';

const cleanesSentence = sentenceToClean.replaceAll(/[^a-zA-z0-9]/g, ' ');
console.log(cleanesSentence);
// 28. Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'

const annualIncome = "I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading";

function calculateAnnualIncome(incomeString) {
    // Use a regular expression to split the income string based on non-numeric characters
    const incomeArray = incomeString.split(/\D+/);

    let totalIncome = 0;

    for (let index in incomeArray) {
        // Convert the non-empty strings to numbers and add to totalIncome
        if (incomeArray[index] !== "") {
            totalIncome += Number.parseInt(incomeArray[index]);
        }
    }

    return totalIncome;
}

console.log(calculateAnnualIncome(annualIncome));
