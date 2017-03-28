//To run: node index.js

var http = require('http');		// Load the http module to create an http server.
var fs = require('fs-extra'); 	//file system methods module

// Configure our HTTP server to respond to all requests.
//Read file sample.txt asynchronously and print to console and browser
var server = http.createServer(function (req, res) {
    fs.readFile("sample.txt", "utf8", function (error, data) {
        res.end(data);
        console.log(data);
    });
});

// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");