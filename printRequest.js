var http = require ('http');
http.createServer(function(request, response){
	response.writeHead(200);
	request.on('readable', function(){
		var chunk = null;
		while (null !== (chunk = request.read())){
			console.log(chunk.toString());
			response.write(chunk);
		}
		console.log('readable');
	});
	console.log('Call to server');
	request.on('end', function(){
		response.end();
	});
}).listen(8080);
console.log ('Print Request - listening on 8080...');