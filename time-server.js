const net = require("net");

const PORT = process.argv[2];

const zeroFill = dateInfo => {
  return dateInfo < 10 ? 0 : "";
};
const now = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${year}-${zeroFill(month)}${month}-${zeroFill(day)}${day} ${zeroFill(
    hour
  )}${hour}:${zeroFill(minutes)}${minutes}\n`;
};
const server = net.createServer(socket => {
  socket.end(now());
});

server.listen(PORT);
