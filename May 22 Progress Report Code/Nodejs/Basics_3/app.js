//Using the Filesystem module to render an HTML file as a response
 
var http = require('http'); //importing the HTTP module
var fs = require('fs'); //filesystem module that we are going to use to read a file.

function onRequest(request, response) { //onRequest function that handles requests made in the server and takes in two arguments: a request and a response
    response.writeHead(200, {'Content-Type': 'text/html'}); //changes the response including the content type
    fs.readFile('./index.html', null, function(error, data) { //reading the index.html file with a passed callback two arguments: an error & data.
        if (error) { //error message
            response.writeHead(404);
            response.write('File note found!');
        }
        else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000); //creates server that listens to the port 8000