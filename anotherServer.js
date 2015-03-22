var server = http.createServer();
server.on('request', function(request, response){
	response.writeHead(200);
	response.write('Server initialized')
	response.end();
}).port(8079);
console.log ('Listening on 8079');