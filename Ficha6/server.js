const express = require("express");
const app = express();
const port = 3000;

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("exemplo de aplicação listen at ", host, port);
});
app.get("/", function (req, res) {
  res.send("Hello World!");
});
//---------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//---------------------------------------------

app.get("/users", function (req, res) {
  var id = req.body.id;
  res.send("posta utilizador");
});
//---------------------------------------------
app.delete("/users/:id", function (req, res) {
  var id = req.params.id;
  res.send("deletar utilizador");
});
//---------------------------------------------
// var fs = require("fs");

// var html = fs.readFileSync("./index.html", "utf-8");
