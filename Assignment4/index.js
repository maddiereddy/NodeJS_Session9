//To run: node index.js index.js

//Reading and writing asynchronously as program will try to read before changes
//have been written back to file.
//Discussed with mentor Muthulakshmi and was advised to do it synchronously

var fs = require('fs-extra');  //fs-extra instead of fs

//Read from json file synchronously, add record and then write it back
var arrayOfObjects = JSON.parse(fs.readFileSync('./students.json', 'utf8'));
console.log(arrayOfObjects);	

//change name if running program more than once
//otherwise will keep rewriting same record
arrayOfObjects.students.push({name: "Angelina", age: 16});

fs.writeFileSync('./students.json', JSON.stringify(arrayOfObjects)); 
console.log('Done writing'); 

//Read from json file synchronously to display record written
var newArray = JSON.parse(fs.readFileSync('./students.json', 'utf8'));
console.log(newArray);