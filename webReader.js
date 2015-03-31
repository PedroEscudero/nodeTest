var http = require('http');
var fs = require('fs');

fs.readFile('README.md', function (err, web2) {
    if (err) {
        throw err; 
    }
    var web = '<a href="http://google.es">Lets google</a>';
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(web);  
        response.end();  
    }).listen(8080);
    
});
