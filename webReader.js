var http = require('http');
var fs = require('fs');

fs.readFile('allHate.js', function (err, text) {
    if (err) {
        throw err; 
    }
    var web =  text;//'<a href="http://google.es">Lets google</a>';
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(web);  
        response.end();  
    }).listen(8080);
    
});
console.log("listening 8080...")
