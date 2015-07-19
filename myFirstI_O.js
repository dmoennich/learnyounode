var fs = require("fs");
var fileLocation = process.argv[2];
var buffer = fs.readFileSync(fileLocation);
var buffStr = buffer.toString();
console.log(buffStr.split("\n").length - 1);
