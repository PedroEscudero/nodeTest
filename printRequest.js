var http = require ('http');
http.createServer(function(request, response){
	response.writeHead(200);
	request.on('readeble', function(){
		var chunk = null;
		while (null !== (chunk = request.red())){
			console.log(chunk.toString);
		}
	});
	request.on('end', function(){
		response.end();
	});
}).listen(8078);
console.log ('Print Request - listening on 8078...');