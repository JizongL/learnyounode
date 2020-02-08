var fs = require("fs");
var myNumber = undefined;
function addOne(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    myNumber = fileContents.toString().split("\n").length - 1;
    callback();
  });
}
function logMyNumber() {
  console.log(myNumber);
}
addOne(logMyNumber);
