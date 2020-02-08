let result;
if (process.argv.length > 2) {
  result = process.argv.slice(2).reduce((acc, item) => {
    return (acc += parseInt(item));
  }, 0);
} else {
  result = 0;
}
console.log(result);
