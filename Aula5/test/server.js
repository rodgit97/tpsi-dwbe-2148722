const express = require("express");
const app = express();
const port = 3000;
//------------------------------------------------------------------
const fs = require("fs");
const { json } = require("stream/consumers");

app.get("/", (req, res) => {
  res.send("um servidor para dados pessoais");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
//-------------------------------------------------------------
function readData() {
  const rawData = fs.readFileSync("persons.json");
  return JSON.parse(rawData);
}
//----------------------------------------------------------------
app.use(express, json());

function readData() {
  const rawData = fs.readFileSync("persons.json");
  return JSON.parse(rawData);
}
//i
app.get("/users", (req, res) => {
  const persons = readData();
  res.json(persons);
});

//ii
app.post("/users", (req, res) => {
  const persons = readData();
  const newPerson = req.body;
  newPerson.id = persons.length + 1;
  persons.push(newPerson);

  fs.writeFileSync("persons.json", JSON.stringify(persons, null, 2));

  res.json(persons);
});

//iii
app.delete("/users/:id", (req, res) => {
  const persons = readData();
  const personId = parseInt(req.params.id);

  const updatePersons = persons.filter((person) => person.id !== personId);

  fs.writeFileSync("persons.json", JSON.stringify(persons, null, 2));

  res.json(updatePersons);
});

//iv
app.delete("/users/:id", (req, res) => {
  const persons = readData();
  const personId = parseInt(req.params.id);
  const person = persons.find((p) => p.id === personId);

  if (person) {
    res.json(person);
  } else {
    res.status(404).send("a pessoa não foi encontrada");
  }
});

//v
app.delete("/users/:id", (req, res) => {
  const persons = readData();
  const personId = parseInt(req.params.id);
  const updatePerson = req.body;

  const index = persons.findIndex((p) => p.id === personId1);

  if (index !== -1) {
    persons[index] = { ...persons[index], ...updatePerson };

    fs.writeFileSync("persons.json", JSON.stringify(persons, null, 2));

    res.json(persons[index]);
  } else {
    res.status(404).send("a pessoa não foi encontrada");
  }
});
