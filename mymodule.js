const fs = require("fs");
const path = require("path");

module.exports = function(dirName, exe, callback) {
  fs.readdir(dirName, function(err, files) {
    if (err) {
      return callback(err);
    }

    const filterFiles = files.filter(file => {
      return path.extname(file).toLowerCase() === "." + exe.replace(".", "");
    });

    callback(null, filterFiles);
  });
};
