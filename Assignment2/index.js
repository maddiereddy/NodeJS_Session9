//To run: node index.js

var http = require('http');		// Load the http module to create an http server.
var fs = require('fs-extra'); 	//file system methods module

console.log("Starting..."); 

//Write text to file asynchronously write_file.txt, create one if not found
var contents = fs.writeFile("./write_file.txt", 
	"Writing sample text to file asynchronously",
 
	 function(error){
	   console.log(" Writing file...");
	  }
 );

console.log(" done ...");

// Configure our HTTP server to respond to all requests.
//read contents of write_file.txt and print to console and browser
//check if what was written is the same as what was read back asynchronously
var server = http.createServer(function (req, res) {
    fs.readFile("./write_file.txt", "utf8", function (error, data) {
        res.end(data);
        console.log(data);
    });
});

// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");