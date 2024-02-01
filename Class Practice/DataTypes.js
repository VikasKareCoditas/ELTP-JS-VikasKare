
// Number -- 32 bits / 8 bytes of memory space 

const integer = 10;
const float = 10.00; 
const double = 10.12314234;
const long = 845345437539;


// String -> Not defined space 
const myFirstName = "Vikas'Kare'";
console.log(myFirstName); // Vikas'Kare'

const myLastName  = 'Kare"Vikas"'; // Kare"Vikas"
const myEmail = "vikas@gmail.com";
console.log(typeof myEmail);

// Boolean - 1 byte memory

const isCheckedIn = true;
const isCheckedOut = false;

// null - 1 byte memory

const nullValue = null;
console.log(nullValue);

// undefined - 1 byte memory

const undefinedValue = undefined; // not a best pratice to use the undefined like this 
console.log(undefinedValue);

let arr = [
    10, // number 
    function (result) {
        console.log(result);
    }, // function can also be defined inside the array
    undefined 
]


console.log(typeof Object); // function
console.log(typeof null); // object
console.log(typeof(0/0));

const obj = {

    names : "Vikas",
    age : 23,
    email : "karevikas7777@gmail.com",
    address : {

        city : "Pune",
        state : "Maharashatra"
    }
}

console.log(typeof obj); // function