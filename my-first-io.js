const fs = require("fs");

files = fs.readFileSync(process.argv[2], "utf8").toString();
console.log(files.split("\n").length - 1);
