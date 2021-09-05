const net = require("net");

const server = net.createServer(() => {});

server.listen(3001, () => {
  console.log("server is listening!!!!");
});
