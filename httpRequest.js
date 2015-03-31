var http = require ('http');
var server = http.createServer();
var makeRequest = function(message){



server.on('request', function(request, response){
	response.writeHead(200);
	response.write(message);
	response.end();
}).listen(8079);

}

module.exports = makeRequest;
