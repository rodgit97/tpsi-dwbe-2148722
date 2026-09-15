// const { log } = require("console");
// const express = require("express");
// const fs = require("fs");
// const { console } = require("inspector");
// const path = require("path");
// const app = express();
// const PORT = 3000;
// const LOG_FILE = path.join(__dirname, "log.txt");

// const express = require("express");
// const fs = require("fs");
// const app = express();
// const PORT = 3000;

// app.use(express.json());

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//--------------------------------------------------------
//
// app.use((req, res, next) => {
//   const logEntry = `${req.method}, ${req.path}, ${new Date().toISOString()}\n`;
//   fs.appendFile(LOG_FILE, logEntry, (err) => {
//     if (err) console.error("Erro ao escrever no log:", err);
//   });
//   next();
// });
// //--------------------------------------------------------
// //4. Crie um endpoint “root” onde deverá escrever o cabeçalho na resposta utilizando a função writeHead
// app.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Bem-vindo ao servidor Express!</h1>");
// });

// //--------------------------------------------------------
// //5. Crie um endpoint “user” que terá um parâmetro “name” onde deverá escrever o cabeçalho na resposta

// app.get("/user/:name", (req, res) => {
//   const name = req.params.name;
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(`Boas, ${name}! Bem-vindo ao servidor de dados.`);
// });
// //--------------------------------------------------------
// //7. Crie um endpoint para listar os conteúdos do ficheiro de logging
// app.get("/logs", (req, res) => {
//   fs.readFile(LOG_FILE, "utf8", (err, data) => {
//     if (err) return res.status(500).send("Erro ao ler o arquivo de logs");
//     res.send(`<pre>${data}</pre>`);
//   });
// });

// //--------------------------------------------------------
// //8. Crie um endpoint para efetuar o download do ficheiro de logging
// app.get("/download", (req, res) => {
//   res.download(LOG_FILE);
// });

// //--------------------------------------------------------
// //9. Crie um endpoint “clear” que deverá apagar o ficheiro
// // de logging e devolver a resposta que o ficheiro foi apagado
// app.get("/clear", (req, res) => {
//   fs.unlink(LOG_FILE, (err) => {
//     if (err)
//       return res.status(500).send("Erro ao apagar o arquivo de logging.");
//     res.send("Arquivo de logging foi sucessivamente apagado.");
//   });
// });
// //--------------------------------------------------------
// //2. Crie um servidor em express tal como foi explicado na aula anterior
// app.listen(PORT, () => {
//   console.log(`Servidor está à rodar em http://localhost:${PORT}`);

//   //3. Quando o servidor for criado, deverá criar um
//   // ficheiro (caso não exista) para registar todos os pedidos
//   //que forem efetuados ao servidor (log.txt)
//   if (!fs.existsSync(LOG_FILE)) {
//     fs.writeFileSync(LOG_FILE, "metodo, caminho, data\n");
//   }
// });
app.get("/", (req, res) => {
  log(req, res);
  var body = "teste de servidor";
  res.writeHead(200, {
    "content-length": Buffer.byteLength(body),
    "content-type": "text/plain",
  });
  res.end(body);
});

//--------------------------------------------------
function log(req, res) {
  var path = req.route.path;
  var method = req.route.method;
  var date = new Date();

  var str = "Path" + path + "Method" + method + "Date" + date;
  fs.appendFileSync("log.txt", str);
}
//--------------------------------------------------
//c
app.get("/html", (req, res) => {
  // var body = "<html><h1>Site html</h1></html>";
  // var body = fs.readFileSync("./index.html", "utf-8");

  var html = fs.readFileSync("./index.html", "utf-8");
  res.writeHead(200, {
    "content-length": Buffer.byteLength(html),
    "content-type": "text/html",
  });
  res.end(html);
});
//--------------------------------------------------
app.get("/html", (req, res) => {
  var str = "teste de site";
  var newStr = str.replace("test", "alguem");
  res.writeHead(200, {
    "content-length": Buffer.byteLength(str),
    "content-type": "text/html",
  });
  res.end(str);
});

//--------------------------------------------------

//5
//a
app.get("/user", (req, res) => {
  log(req, res);
  var body = fs.readFileSync("user name", "/user");
  res.writeHead(200, {
    "content-length": Buffer.byteLength(body),
    "content-type": "text/user",
  });
});
//--------------------------------------------------
//7
app.post("/log", (req, res) => {});
//--------------------------------------------------
