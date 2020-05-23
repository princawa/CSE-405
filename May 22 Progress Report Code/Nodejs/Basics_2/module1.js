//Function that logs to the console
function myFunction() {
    console.log('Function was called');
}


var myString = 'This is a string!'; //String to print out

module.exports.myFunction = myFunction; //Exporting 'myFunction' function and making it available in other files
module.exports.myString = myString;