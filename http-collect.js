const http = require("http");
const bl = require("bl");
const URL = process.argv[2];

http.get(URL, response => {
  response.setEncoding("utf8");
  response.pipe(
    bl((err, data) => {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});

// http.get(URL, response => {
//   response.setEncoding("utf8");
//   let rawData = "";
//   response.on("data", data => {
//     rawData += data;
//   });
//   response
//     .on("end", () => {
//       try {
//         // const parsedData = JSON.parse(rawData);
//         console.log(rawData.length);
//         console.log(rawData);
//       } catch (e) {
//         console.error(e);
//       }
//     })
//     .on("error", e => {
//       console.error(`Got error:${e.message}`);
//     });
// });
