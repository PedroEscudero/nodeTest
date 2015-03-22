var http = require('http');
var numberCalls=0;
http.createServer(function(request, response){

	numberCalls ++;
	response.writeHead(200);
	response.write("Call.");
	console.log("Call " + numberCalls);
	response.end();

}).listen(8080);
console.log("listening on port 8080...");