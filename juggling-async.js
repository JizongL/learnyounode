var http = require("http");
var bl = require("bl");

var urls = [];
for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

var makeRequest = function(urls) {
  if (urls.length > 0) {
    http.get(urls.shift(), function(res) {
      res.pipe(
        bl(function(err, data) {
          if (err) return console.error(err);
          console.log(data.toString());
        })
      );
      res.on("end", function() {
        makeRequest(urls);
      });
    });
  }
};

makeRequest(urls);

// var http = require("http");
// var bl = require("bl");
// var results = [];
// var count = 0;

// function printResults() {
//   for (var i = 0; i < 3; i++) console.log(results[i]);
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function(response) {
//     response.pipe(
//       bl(function(err, data) {
//         if (err) return console.error(err);

//         results[index] = data.toString();
//         count++;

//         if (count == 3) printResults();
//       })
//     );
//   });
// }

// for (var i = 0; i < 3; i++) httpGet(i);

// const http = require("http");
// const bl = require("bl");
// let obj = {};
// urlArr = process.argv.slice(2, process.argv.length);
// const rawResult = [];
// let completed = 0;

// const printResults = () => {
//   for (item of rawResult) console.log(item);
// };

// for (url of urlArr) {
//   http.get(url, response => {
//     response.pipe(
//       bl((err, data) => {
//         if (err) return console.error(err);

//         rawResult[completed] = data.toString();
//         completed++;
//         if (completed == urlArr.length) {
//           printResults();
//         }
//       })
//     );
//   });
// }
