const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("mysql_express");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "utilizadores",
});

connection.connect();

connection.query("SELECT 1+1 AS solution", function (err, rows, fields) {
  if (err) throw err;
  console.log("a solucao é: ", rows[0].solution);
});

connection.end();

// connection.query('SELECT * FROM `books` WHERE `author` -"David"', function (err, rows, fields) {
//   if (err) throw err;
//   console.log("a solucao é: ", rows[0], fields[0],solution);
// });

connection.end(function (err) {
  if (err) throw err;
});
connection.destroy();

// var pool = mysql.createPool({
//   connectionLimit: 100,
//   host: "localhost",
//   user: "root",
//   password: "123",
//   database: "utilizadores",
//   debug: false,
// });

// var mysql = require("mysql");
// var pool = mysql.createPool({
//   connectionLimit: 100,
//   host: "127.0.0.1",
//   user: "toor",
//   password: "123",
//   database: "utilizadores",
//   debug: false,
// });

var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1",
  user: "toor",
  password: "123",
  database: "utilizadores",
});

pool.query("SELECT 1+1 AS solution", function (err, resul, fields) {
  if (err) throw err;
  console.log("a solucao é: ", resul[0].solution);
});

pool.getConnection(function (err, connection) {
  if (err) {
    connection.release();
    res.json({ code: 100, status: "erro na conecao base de dados" });
    return;
  }
  connection.query(user_query, function (err, rows, fields) {
    if (err) throw err;
    if (rows.length == 0) {
      console.log("no device tokrn found");
      callback(null, null);
    } else {
      callback(null, rows[0]);
    }
  });
});
//----------------------------------------------------------------
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const swaggerOptions = {
//   swaggerDefinitions: {
//     info: {
//       definitions: {},
//       apis: ["app.js"],
//     },
//   },
// };
// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
