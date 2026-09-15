const express = require("express");
const app = express();
const port = 3000;

var dataObj;

app.get("/", (req, res) => {
  res.send("Boa tarde");
});

app.get("/users", (req, res) => {
  res.send(dataObj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//----------------------------------------------------------------------
app.get("/users/:id", (req, res) => {
  var id = req.params.id;
  var person = null;
  for (let i = 0; i < persons.data.length; i++) {
    // const person = dataObj.data[i];
    // if (person.id == id) {
    if (persons.data[i].id == id) {
      // res.send(person);
      person = persons.data[i];
    }
  }
  if (person) {
    res.send(person);
  } else {
    // res.send("id not found");
    res.status(404).send("id not found");
  }
  // res.send("id not found");
});

app.post("/users", (req, res) => {
  var newPerson = req.body;
  dataObj.data.push(newPerson);
  res.send("new person was added" + JSON - stringify(newPerson));
});

app.delete("/users/:id", (req, res) => {});
