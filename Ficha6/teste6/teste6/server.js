const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("isto é um teste dos enunciados 4 e 5");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//----------------------------------------------------------
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Example app listening on host and port`, host, port);
});
//----------------------------------------------------------
app.get("/", function (req, res) {
  res.send("request afirmada");
});
//----------------------------------------------------------

app.post("/users", function (req, res) {
  var id = req.body.id;
  res.send("post user");
});
//----------------------------------------------------------
app.post("/users/:id", function (req, res) {
  var id = req.params.id;
  res.send("delete user");
});
//----------------------------------------------------------
// var fs = require("fs");
// //----------------------------------------------------------
// var html = fs.readFileSync("./index.html", "utf-8");
//----------------------------------------------------------
// fs.appendFile()
// fs.open()
// fs.writeFile()
//----------------------------------------------------------
app.get("/", function (req, res) {
  var id = req.params.id;
  res.send("root");
});
//----------------------------------------------------------
app.get("/user/:id", function (req, res) {
  var userId = req.params.id;
  res.send(userId);
});
//----------------------------------------------------------
app.get("/search", function (req, res, next) {
  res.send(req.query);
});
//----------------------------------------------------------
app.get("/random.text", function (req, res) {
  res.send("random.text");
});

app.get(/a/, function (req, res) {
  res.send(/a/);
});
//----------------------------------------------------------
//----------------------------------------------------------
// const body = "bom dia";
// res.writeHead(200, {
//   "content-length": Buffer.byteLength(body),
//   "content-length": "text/plain",
// });
//----------------------------------------------------------
