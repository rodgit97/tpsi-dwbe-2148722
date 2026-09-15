const express = require("express");
// const fs = require(fs);
// const fs = require("node:fs/promises");
const app = express();
const port = 3000;
// const fileContent = fs.readFileSync("data.json");
// const dataObj = JSON.parse(fileContent);

app.use(express.json);

var dataObj;

// var fileContent = fs.readFileSync("data.json");
var dataObj = JSON.parse(fileContent);

app.get("/", (req, res) => {
  res.send("teste do projeto");
});

app.get("/users", (req, res) => {
  res.send(dataObj);
});

app.post("/users", (req, res) => {
  var newPerson = req.body,
    dataObj.data.push(newPerson);

  res.send("Novo utilizador foi adquirido");
});

app.delete("/users:id", function(req,res)=>{
  var id=req.body,
  dataObj.send("Utilizador Apagado")
})
app.get("/users:id", function(req,res)=>{
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
   
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
