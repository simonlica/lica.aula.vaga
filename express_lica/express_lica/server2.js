const express = require("express");
const server2 = express();

server2.get("/", (req, res) => {
  res.sendFile("/html/principal.html", { root: __dirname });
});
server2.get("/principal", (req, res) => {
  res.send("<h1>Olá ExpressJS.</h1>");
});
server2.get("/serviços", (req, res) => {
  res.send("<h1>Olá ExpressJS.</h1>");
});
server2.get("/sobre", (req, res) => {
  res.sendFile("./html/sobre.html", { root: __dirname });
});
server2.get("/servicos", (req, res) => {
  res.sendFile("./html/servicos.html", { root: __dirname });
});
server2.use((req, res) => {
  res.status(404).sendFile("./html/404.html", { root: __dirname });
});

server2.listen(3000);
