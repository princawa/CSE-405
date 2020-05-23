//Binding modules to this file to log a string on a local server that we created.
//Using a module to understand how to structure an application with several files, and import or export the contents of these files. 

var http = require('http'); //importing the HTTP module
var module1 = require('./module1'); //importing the module1 we created.
var module2 = require('./module2'); //importing the module2 we created.

function onRequest(request, response) { //onRequest function that handles requests made in the server and takes in two arguments: a request and a response
    response.writeHead(200, {'Content-Type': 'text/plain'}) //changes the response including the content type
    //response.write (module1.myString); //Call the write function to render the string from the module.
    response.write (module2.myVariable);
    //module1.myFunction() //executing myFunction from module1 file.
    module2.myFunction()
    response.end(); //finished handling response and can be outputted to personal send request.
}

http.createServer(onRequest).listen(8000); //creates server that listens to the port 8000