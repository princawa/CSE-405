/*Facundo Holzmeister
004877115
value.js
April 24 Progress Report
*/

const values = [ //settings the following strings to be constant
    "554 123 4564",
    "(333) 312-3420",
    "34-554-3123-213",
    "134-34(304)-(342)",
    "1 34 342 (234)-234"
]

const log = console.log; //prints results to console

const title = msg => log(`\n\n----\n${msg}\n----`);  //Formatted Title in the console

//The test grabs the message string, the desired pattern, and the const values. Values are also compared to the message and then given the appropiate boolean type.
const test = (msg, pattern, values) => {   
    title(`${msg} ${pattern}`)  

    values.forEach(value => log(`${value}: ${pattern.test(value)}`)) 
}

//Test outputs
test ("This will be a test for any parenthesis: ", /[()]/, values)

test ("This test is for dashes: ", /[-]/, values)

test ("This test is for any parenthesis and/or dashes: ", /[()]/, values)

test ("This test is to find this specific number format: (###) ###-####: ", /\(\d{3}\) \d{3}-\d{4}/, values)


