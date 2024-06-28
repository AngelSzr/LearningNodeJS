const http = require("node:http");
const { findAvailablePort } = require("./10.free-port");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(100).then((port) => {
  server.listen(port, () => { 
    console.log(
      `servidor escuchando en puerto, http://localhost:${server.address().port}`
    );
  });
});
