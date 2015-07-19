var fs = require("fs");
var fileLocation = process.argv[2];
fs.readFile(fileLocation, "utf8", function(err, content){
	if(!err){
		console.log(content.split("\n").length - 1);
	}
});

