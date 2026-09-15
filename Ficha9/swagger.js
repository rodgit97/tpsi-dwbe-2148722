const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"]; // ou ./server.js dependendo do nome

const doc = {
  info: {
    title: "API de Gestão de Carros",
    description: "Documentação da API desenvolvida na Ficha 9",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
