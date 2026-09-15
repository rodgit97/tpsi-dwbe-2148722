const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
//--
const swaggerDocument = require("./swagger.json");

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//--
const swaggerOptions = {
  swaggerDefinitions: {
    info: {
      version: "1.0.0",
      title: "Ficha 7 Api ",
      description: "ficha 7  api information",
      contact: {
        name: "TPSI-DWB",
      },
      servers: ["http://localhost:3000"],
      definitions: {
        Person: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              "x-primary-key": true,
            },
            firstname: {
              type: "tenho",
            },
            lastname: {
              type: "nome",
            },
            profession: {
              type: "desemperegado",
            },
            age: {
              type: "1234",
              format: "int64",
            },
          },
        },
      },
      apis: ["app.js"],
    },
  },
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//-----------------------
//get
/**
 * @swagger
 * /person:
 * get:
 * tags:
 * - Person
 *
 *
 * */

app.get("/person", (req, res) => {});

app.post("/person", (req, res) => {});
