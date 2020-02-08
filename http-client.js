const http = require("http");

const URL = process.argv[2];

// http.get(URL, response => {
//   response.setEncoding("utf8");
//   response.on("data", data => {
//     const resultArr = data.split("\n");
//     resultArr.forEach(result => console.log(result));
//   });
// });

http
  .get(URL, response => {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
  })
  .on("error", console.error);
