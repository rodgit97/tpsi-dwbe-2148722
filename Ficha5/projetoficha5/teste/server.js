//-----------------------------------------------------------------
// const express = require("express");
// const fs = require("fs");
// const { stringify } = require("querystring");
// const app = express();
// const PORT = 3000;
//-----------------------------------------------------------------
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

const readData = () => {
  try {
    const data = fs.readFileSync("persons.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    return {}; //data: []
  }
};
//-----------------------------------------------------------------
const writeData = (data) => {
  fs.writeFileSync("person.json", JSON.stringify(data, null, 2));
};

//-----------------------------------------------------------------
//lista pessoas todas
app.get("/users", (req, res) => {
  const persons = readData();
  res.json(persons.data);
});
//-----------------------------------------------------------------
//adicionar pessoa
app.post("/users", (req, res) => {
  const persons = readData();
  const newPerson = {
    id: persons.data.length + 1,
    ...req.body,
  };
  persons.data.push(newPerson);
  writeData(persons.data);
});
//-----------------------------------------------------------------
//apagar pessoa pelo id
app.delete("/users/id", (req, res) => {
  const persons = readData();
  persons.data = persons.data.filter(
    (person) => person.id !== parseInt(req.params.id)
  );
  writeData(persons);
  res.json(persons.data);
});
//-----------------------------------------------------------------
//editar detalhes pessoa pelo id
app.put("/users/:id", (req, res) => {
  const persons = fs.readData();
  const person = persons.data.find(
    (person) => person.id === parseInt(req.params.id)
  );
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ message: "Person not found" });
  }
});
//-----------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
//-----------------------------------------------------------------

// app.use(express.json());

// const FILE_PATH = "./persons.json";
// //-----------------------------------------------------------------

// const readFile = () => {
//   try {
//     const data = fs.readFileSync(FILE_PATH, "utf8");
//     return JSON.parse(data);
//   } catch (err) {
//     return {};
//   }
// };
// //-----------------------------------------------------------------

// const writeFile = (data) => {
//   fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf8");
// };
// //-----------------------------------------------------------------

// app.get("/users", (req, res) => {
//   const persons = readFile();
//   res.json(persons);
// });
// //-----------------------------------------------------------------

// // app.post("/users", (req, res) => {
// //   const persons = readFile();
// //   const newId = Object.keys(persons).length + 1;
// //   const newPerson = { id: newId, ...req.body };
// //   persons[`person${newId}`] = newPerson;
// //   writeFile(persons);
// //   res.json(persons);
// // });
// //-----------------------------------------------------------------

// app.delete("/users/:id", (req, res) => {
//   const persons = readFile();
//   const id = req.params.id;
//   if (persons[`person${id}`]) {
//     delete persons[`person${id}`];
//     writeFile(persons);
//   }
//   res.json(persons);
// });
// //-----------------------------------------------------------------

// // app.get("/users/:id", (req, res) => {
// //   const persons = readFile();
// //   const person = persons[`person${req.params.id}`];
// //   res.json(person || { message: "Person not found" });
// // });
// //-----------------------------------------------------------------

// app.put("/users/:id", (req, res) => {
//   const persons = readFile();
//   const id = req.params.id;
//   if (persons[`person${id}`]) {
//     persons[`person${id}`] = { ...persons[`person${id}`], ...req.body };
//     writeFile(persons);
//   }
//   res.json(persons[`person${id}`] || { message: "Person not found" });
// });
// //-----------------------------------------------------------------

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// //-----------------------------------------------------------------
//novo endpoints

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
