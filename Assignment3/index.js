//import modules events and http
var events = require('events');
var http = require('http');	

//create a Product object with a price and reserve price properties 
//set to a default value
function Product(){
	this.price = 10;
	this.reservePrice = 500;

	//increase bid price of product
	//emit event priceChanged
	this.increase = function(amount){
		this.price += amount;
		this.emit('priceChanged');
	};

	//decrease bid price of product
	//emit event priceChanged
	this.decrease = function(amount){
		this.price -= amount;
		this.emit('priceChanged');
	};
}

//Prototypal inheritance.
Product.prototype.__proto__ = events.EventEmitter.prototype;

var server = http.createServer(function (req, res) {

	//display current price
	function displayPrice(){
		console.log('Price : ' + this.price);
		res.write('Price : ' + this.price + '\n\r');
	}

	//check if reserve price has been met
	function checkReservePrice(){
		if(this.price > this.reservePrice ){
			console.log('Reserve price met!!!');
			res.write('Reserve price met!!! \n\r');
		}
	}

	//create an instance of the Product object
    var prod = new Product();

    //tie in event emitted to relevant methods
    //each time priceChanged run displayPrice() and 
    //checkReservePrice() and print if reserve price met
	prod.on('priceChanged', displayPrice);
	prod.on('priceChanged', checkReservePrice);

	//put in bids
	prod.increase(420);
	prod.decrease(320);
	prod.increase(700);

	res.end();
});

// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");



