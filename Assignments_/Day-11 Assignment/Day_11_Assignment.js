// Day-11 Assignment
// Declare an empty array;

const employees = [];

// Declare an array with more than 5 number of elements

const cities = ["Pune", "Mumbai", "Nagpur", "Delhi", "Goa", "Chandrapur"];

// Find the length of your array

const citiesLength = cities.length;
console.log(citiesLength);

// Get the first item, the middle item and the last item of the array

console.log(`First item : ${cities[0]}`);
console.log(`Middle item : ${cities[Math.floor(citiesLength / 2)]}`);
console.log(`Last item : ${cities[citiesLength - 1]}`);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [12, 23.45, 'Vikas', false, function() {}, ["Pune","Delhi"]];
console.log(mixedDataTypes.length);


// Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ["Coditas", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Print the array using console.log()

console.log(itCompanies);

// Print the number of companies in the array

console.log(`No of companies in the array : ${itCompanies.length}`);

// Print the first company, middle and last company

console.log(`First company : ${itCompanies[0]}`);
console.log(`Middle company : ${itCompanies[Math.floor(itCompanies.length / 2)]}`);
console.log(`Last company : ${itCompanies[itCompanies.length - 1]}`);

// Print out each company

for(let index in itCompanies) {
    console.log(itCompanies[index]);
}
// Change each company name to uppercase one by one and print them out

for(let index in itCompanies) {

    console.log(itCompanies[index].toUpperCase());
}
// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const sentence = itCompanies.toString();
console.log(sentence + " are big IT companies.");

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

console.log(itCompanies.includes('Coditas') ? "Coditas is in List of Companies" : "Coditas is not in list of companies");

// Filter out companies which have more than one 'o' without the filter method

let companiesWithMoreo = [];
for(let index in itCompanies) {

    let company = itCompanies[index];
    let oCount = 0;
    for(let iterator = 0; iterator < company.length; iterator++) {

        if(company.charAt(iterator) == 'o') {

            oCount++;
        }
    }

    if(oCount > 1) {

        companiesWithMoreo.push(company);
    }
}
console.log(companiesWithMoreo);


// Sort the array using sort() method

const sorted = itCompanies.sort();
console.log(sorted);

// Sort the array by country name length without sort;

const countries = ["India", "Bangadesh", "Canada", "France", "Germany"]

countries.sort((a, b) => a.length - b.length);
console.log(countries);


// Reverse the array using reverse() method

const reversed = cities.reverse(); 
console.log(reversed); // [ 'India', 'Canada', 'France', 'Germany', 'Bangadesh' ]

// Slice out the first 3 companies from the array

const sliced = itCompanies.slice(0, 3); 
console.log(sliced); // [ 'Amazon', 'Apple', 'Coditas' ]

// Slice out the last 3 companies from the array

const sliced2 = itCompanies.slice(itCompanies.length - 3);
console.log(sliced2); // [ 'IBM', 'Microsoft', 'Oracle' ]


// Slice out the middle IT company or companies from the array

const middleItCompany = itCompanies.slice(Math.floor(itCompanies.length / 2) + 1,1);
console.log(`Middle it Company : ${middleItCompany}`);

// Remove the first IT company from the array

console.log(itCompanies.shift()); // Amazon

// Remove the middle IT company or companies from the array

console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1));
console.log(itCompanies);

// Remove the last IT company from the array

console.log(itCompanies.pop());
console.log(itCompanies);


// Remove all IT companies

itCompanies.length = 0;
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'

text = text.replace(',',  " ");

let words = text.split(' ')
console.log(words);

let count = 0;
console.log(`No of words in the words array ` + words.length - 1);

// 25. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added

!shoppingCart.includes("Rasmalai") ? shoppingCart.unshift("Rasmalai") : "Already present";
console.log(shoppingCart);

// add Gulabjamun at the end of you shopping cart if it has not been already added


!shoppingCart.includes("Gulabjamun")? shoppingCart.push("Gulabjamun") : "Already present";
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey

let indexOfHoney = shoppingCart.indexOf("Honey");
console.log(indexOfHoney);

shoppingCart.splice(indexOfHoney, 1);
console.log(shoppingCart);


// modify Tea to 'Green Tea'

let indexofTea = shoppingCart.indexOf("Tea");
shoppingCart[indexofTea] = "Green Tea";

console.log(shoppingCart);

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.

countries.includes('India') ? console.log("INDIA") : countries.push("India");

// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = ["HTML", "CSS", "JavaScript", "Node.js", "Node.js", "React.js"];

webTechs.includes('Sass')? console.log("Sass is a CSS preprocess") : webTechs.push("Sass");

// 28. Concatenate the following two variables and store it in a fullStack variable.


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// 29. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort();
console.log(ages[0]);
console.log(ages[ages.length - 1]);

// Find the median age(one middle item or two middle items divided by two)

function getMedianAge(ages) {
    
   return ages.length % 2 ? ages[ages.length / 2 - 1] : ages[ages.length / 2 ] 
}

const medianAge = getMedianAge(ages);

console.log(medianAge);

// Find the average age(all items divided by number of items)

function getAverageAge(ages) {
    
    let totalAge = 0;
    for(let index in ages) {
        totalAge += ages[index];
    }
    return totalAge / ages.length;
}

const averageAge = getAverageAge(ages);
console.log(averageAge);

// Find the range of the ages(max minus min)

function getRange(ages) {
    
    return ages[ages.length - 1] - ages[0];
}

const range = getRange(ages);

console.log(range);
// Compare the value of (min - average) and (max - average), use abs() method 

let min = ages[0];
let max = ages[ages.length - 1];

const minMinusAverage = Math.abs(min - averageAge);
const maxMinusAverage = Math.abs(max - averageAge);

minMinusAverage > maxMinusAverage ? console.log("minMinusAverage is greater than maxMinusAverage") : console.log("maxMinusAverage is greater than minMinusAverage");

// 1.Slice the first ten countries from the countries array


console.log(countries.slice(0, 10));

// 30. Find the middle countries in the countries array.

console.log(countries[Math.floor(countries.length / 2)]);

// 31. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
// ARRAYS:
const newCountries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'India',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  console.log(newCountries)
  let midpoint = 0;

  newCountries.length % 2 ? (midpoint = Math.ceil(newCountries.length / 2) - 1): (midpoint = Math.ceil(newCountries.length / 2));
  
  console.log(midpoint);
  // Divide the array into two parts
  const firstHalf = newCountries.slice(0, midpoint);
  const secondHalf = newCountries.slice(midpoint);
  
  console.log('First half:', firstHalf);
  console.log('Second half:', secondHalf);
  
  





