// const app = express();
// app.use(express.json());
const express = require("express");
const mysql = require("mysql");
//-------------------------------------------------------------------
//ficha8
const swaggerUi=()
const swaggerAutogen=('')

var pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "123", // Insira sua senha aqui
  database: "utilizadores",
  debug: false,
});


pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("a solução é: ", results[0].solution);
});

pool.getConnection(function (err, connection) {
  if (err) {
    connection.release();
    res.json({ codigo: 100, status: "erro na conetação da base de dados" });
    return;
  }
  connection.query(user_query, function (err, rows, fields) {
    if (error) throw err;

    if (rows.length == 0) {
      console.log("nenhum dispositivo token encontrado");
      callback(null, null);
    } else {
      callback(null, rows[0]);
    }
  });
});

// db.connect((err) => {
//   if (err) {
//     console.error("Erro na coneção:", err);
//   } else {
//     console.log("Coneção confirmada!");
//   }
// });

// Rota para listar todos os usuários

app.get("/users", (req, res) => {
  db.query("SELECT * FROM Users", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
//-------------------------------------------------------------------
app.post("/users/:id", (req, res) => {
  const { firstname, lastname, profession, age } = req.body;
  const sql =
    "INSERT INTO Users (firstname, lastname, profession, age) VALUES (?, ?, ?, ?)";
  db.query(sql, [firstname, lastname, profession, age], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId });
  });
});
//-------------------------------------------------------------------

app.delete("/users", (req, res) => {
  const { id } = req.body;
  const sql = "DELETE FROM Users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "utilizador não foi encontrado" });
    }
    res.json({
      message: "utilizador removido",
      affectedRows: result.affectedRows,
    });
  });
});
//-------------------------------------------------------------------
app.delete("/users/:id", (req, res) => {
  var id = req.params.id;
  var sql = "DELETE FROM Users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json({
      message: "utilizador foi removido",
      affectedRows: result.affectedRows,
    });
  });
});
//-------------------------------------------------------------------

app.get("/users/:id", (req, res) => {
  var id = req.params.id;
  connection.query
  const sql = "SELECT * FROM Users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "utilizador não foi encontrado" });
    }
    res.json(result[0]);
  });
});
//-------------------------------------------------------------------
app.get("/users/:age/:profession", (req, res) => {
  const { age, profession } = req.params;
  const sql = "SELECT * FROM Users WHERE age = ? AND profession = ?";
  db.query(sql, [age, profession], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Nenhum utilizador encontrado" });
    }
    res.json(results);
  });
});
//-------------------------------------------------------------------

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, profession, age } = req.body;
  const sql =
    "UPDATE Users SET firstname = ?, lastname = ?, profession = ?, age = ? WHERE id = ?";
  db.query(sql, [firstname, lastname, profession, age, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json({ message: "Usuário atualizado", id });
  });
});
//-------------------------------------------------------------------
app.post("/users", function(req, res) {
  var details=req.body;
connection.query("INSERT users set ?",[details],function(error,results))
});
//-------------------------------------------------------------------
  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// // var pool = mysql.createPool({
// //   connectionLimit: 100,
// //   host: "127.0.0.1",
// //   user: "root",
// //   password: "123",
// //   database: "user",
// //   debug: false,
// // });
//-------------------------------------------------------------------
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerFile))