var http = require('http');
var fs = require('fs');

fs.readFile('README.md', function (err, web) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(web);  
        response.end();  
    }).listen(8080);
    
});
