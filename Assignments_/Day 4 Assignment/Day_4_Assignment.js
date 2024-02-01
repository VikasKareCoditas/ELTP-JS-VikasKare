
// Day-4 Assignment
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let numberString  = "10";

if(typeof numberString === typeof 10) {

    console.log("types of '10' and 10  are same")
}else {

    console.log("types of '10' and 10  are not same");
    numberString = Number("10"); // parsing the strign into the number
   if(typeof numberString === typeof 10)  {

        console.log(numberString);
        console.log("Now types are same");
   }  
}

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

if(parseFloat("9.8") === 10) {
    console.log("'9.8' is equal to 10");
}else {

    // console.log("'9.8' and 10 are not equal");
    const parsedFloat = Math.ceil(parseFloat("9.8")); // Math.ceil()
    if(parsedFloat === 10) {

        console.log(parsedFloat);
        console.log(`'9.8' is now ${parsedFloat}`);
    }
}

// Generate a random number between 0 and 100 inclusively.
console.log("Radom is now");
const randomNumberGenerator = () => {

    return Math.ceil(Math.random() * 100) + 1; 
}

console.log(randomNumberGenerator());
// Generate a random number between 50 and 100 inclusively.

const randomNumberGeneratorIn50To100 = () => {

    return Math.floor(Math.random() * 50) + 51; // 50 is exclusive thats why adding the 50
}

console.log(randomNumberGeneratorIn50To100());

// 5. Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

    for(let iterator = 1; iterator <= 5; iterator++) { 
        console.log( iterator +   "\t" + iterator ** 0 + "\t" + iterator ** 1 + "\t" + iterator ** 2 + "\t" + iterator ** 3);
    }

// 6. Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// DEADLINE - 4:30PM
            
const calculateAreaOfTriangle = (base, height) => {

    return 0.5 * base * height;
} 

const base = 10;
const height = 23;

console.log(calculateAreaOfTriangle(base, height));
