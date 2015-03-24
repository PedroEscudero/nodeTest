var fs = require('fs');
var file = fs.createReadStream("README.md");
var newFile = fs.createWriteStream("copyReadme.md");
file.pipe(newFile);