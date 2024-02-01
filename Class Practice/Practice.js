
// employee can be changed so declare it as a let
let employeeName = "Vikas";

// ID can't change so it must be a cosnt variablef
const employeeID = 5569;

// A helper function to Show Employee Data
const employeeInfo = function() {

        // organization name cant be changed so declare with const
        const companyName = "Coditas";
        console.log(`Oraganization Name : ${companyName}`);
        console.log(`Employee Name : ${employeeName}`);
        console.log(`Employee ID : ${employeeID}`);
        console.log("----- ----- ------")
}

// Method Invocation 
employeeInfo();
 
// lets reassign the employeeName and invoke the employeeInfo

employeeName = "Sumit";

// cant reassign to the variable with cosnt declaration
employeeID = 1234;

// can't invoke the call due to interpreter works line by
employeeInfo();









