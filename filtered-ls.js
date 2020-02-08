const fs = require("fs");
const path = require("path");
const dirName = process.argv[2];
const filterStr = "." + process.argv[3];

// fs.readdir(dirName, (err, files) => {
//   if (err) console.error(err);

//   const filteredFiles = files.filter(file => {
//     return (
//       path.extname(file).toLowerCase() === "." + filterStr.replace(".", "")
//     );
//   });
//   filteredFiles.forEach(file => console.log(file));
// });

fs.readdir(dirName, (err, files) => {
  if (err) console.error(err);
  files.forEach(file => {
    if (path.extname(file) === filterStr) console.log(file);
  });
});
