//node app.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("teste do anunciado ficha8");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("vou usar um exemplo para host e port", host, port);
});
//---------------------------------------------------------------------
app.get("/", function (req, res) {
  res.send("apanha a bola");
});

app.post("/users", function (req, res) {
  var id = req.body.id;
  res.send("utilizador postado");
});

app.post("/users/:id", function (req, res) {
  var id = req.params.id;
  res.send("utilizador apagado");
});
//---------------------------------------------------------------------
// var fs = require("fs");

// var html = fs.readFileSync("./index.html", "utf-8");
// var html = fs.appendFile("./index.html", "utf-8");
// var html = fs.open("./index.html", "utf-8");
// var html = fs.writeFile("./index.html", "utf-8");

// var html = fs.r("./index.html", "utf-8");
// var html = fs.o("./index.html", "utf-8");
// // r r+ rs+ w wx w+ wx+ a ax as  a+ ax+ as+
//---------------------------------------------------------------------
app.get("/", function (req, res) {
  res.send("root");
});

app.get("/user/:id", function (req, res) {
  var userId = req.params.id;
  res.send(userId);
});
//postman
app.get("/search", function (req, res, next) {
  res.send(req.query);
});

app.get("/random.text", function (req, res) {
  res.send("random.text");
});

app.get("/a/", function (req, res) {
  res.send("/a/");
});

// const body = "usando body header";
// res.writeHead(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.download(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.json(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.jsonp(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.redirect(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.render(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.send(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.sendFile(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });

// const body = "usando body header";
// res.sendStatus(200, {
//   "Content-Length": Buffer.byteLength(body),
//   "Content-Type": "text/plain",
// });


