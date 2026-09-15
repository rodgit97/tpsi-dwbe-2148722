//-----------------------------------------------------------------
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
//-----------------------------------------------------------------

// Middleware para interpretar JSON
app.use(express.json());

const FILE_PATH = "./persons.json";
//-----------------------------------------------------------------

// Função para ler o arquivo JSON de forma síncrona
const readFile = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
};
//-----------------------------------------------------------------

// Função para escrever no arquivo JSON
const writeFile = (data) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf8");
};
//-----------------------------------------------------------------

// Endpoint para listar todas as pessoas
app.get("/users", (req, res) => {
  const persons = readFile();
  res.json(persons);
});
//-----------------------------------------------------------------

// Endpoint para adicionar uma nova pessoa
app.post("/users", (req, res) => {
  const persons = readFile();
  const newId = Object.keys(persons).length + 1;
  const newPerson = { id: newId, ...req.body };
  persons[`person${newId}`] = newPerson;
  writeFile(persons);
  res.json(persons);
});
//-----------------------------------------------------------------

// Endpoint para deletar uma pessoa pelo ID
app.delete("/users/:id", (req, res) => {
  const persons = readFile();
  const id = req.params.id;
  if (persons[`person${id}`]) {
    delete persons[`person${id}`];
    writeFile(persons);
  }
  res.json(persons);
});
//-----------------------------------------------------------------

// Endpoint para obter uma pessoa pelo ID
app.get("/users/:id", (req, res) => {
  const persons = readFile();
  const person = persons[`person${req.params.id}`];
  res.json(person || { message: "Person not found" });
});
//-----------------------------------------------------------------

// Endpoint para editar uma pessoa pelo ID
app.put("/users/:id", (req, res) => {
  const persons = readFile();
  const id = req.params.id;
  if (persons[`person${id}`]) {
    persons[`person${id}`] = { ...persons[`person${id}`], ...req.body };
    writeFile(persons);
  }
  res.json(persons[`person${id}`] || { message: "Person not found" });
});
//-----------------------------------------------------------------

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
