//Creating a server-like functionality file to output "Hello World" in plain text

var http = require('http'); //Import the HTTP module

function onRequest(request, response) { //onRequest function that handles requests made in the server and takes in two arguments: a request and a response
    response.writeHead(200, {'Content-Type': 'text/plain'}) //changes the response including the content type
    response.write ('Hello CSE 405 Professor. Facundo Holzmeister was here.'); //Call the write function to render some plain text to the screen.
    response.end(); //finished handling response and can be outputted to personal send request.
}

http.createServer(onRequest).listen(8000); //creates server that listens to the port 8000