const mymodule = require("./mymodule");

const callback = (err, data) => {
  if (err) console.log(err);
  data.forEach(file => {
    console.log(file);
  });
};

mymodule(process.argv[2], process.argv[3], callback);
