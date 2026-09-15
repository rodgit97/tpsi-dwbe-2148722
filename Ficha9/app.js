// const express = require("express");
const Car = require("./models/cars");
const carRoutes = require("./routes/cars");
const swaggerUi = require("swagger-ui-express");
// const sequelize = require("./db");
const swaggerFile = require("./swagger_output.json");

const express = require("express");
const cars = require("./models/cars");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// app.use('/cars', carRoutes);

app.get("/", (req, res) => {
  res.send("Ficha 9");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//--------------------------------------------------------------------------------------
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Ligado à base de dados e modelo sincronizado.");
//   })
//   .catch((err) => {
//     console.error("Erro ao ligar à base de dados:", err);
//   });
//--------------------------------------------------------------------------------------

// Car.bulkCreate([
//   {
//     Brand: "Toyota",
//     Model: "Corolla",
//     LicensePlate: "AA-11-BB",
//     Color: "Red",
//     Year: 2018,
//     Power: 110,
//     Displacement: 1.6,
//   },
//   {
//     Brand: "BMW",
//     Model: "X5",
//     LicensePlate: "CC-22-DD",
//     Color: "Black",
//     Year: 2020,
//     Power: 250,
//     Displacement: 3.0,
//   },
//   {
//     Brand: "Ford",
//     Model: "Fiesta",
//     LicensePlate: "EE-33-FF",
//     Color: "Blue",
//     Year: 2015,
//     Power: 95,
//     Displacement: 1.0,
//   },
// ])
//   .then(() => {
//     console.log("Carros inseridos!");
//   })
//   .catch((err) => {
//     console.error("Erro ao inserir carros:", err);
//   });

//--------------------------------------------------------------------------------------
app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar carros." });
  }
});
//--------------------------------------------------------------------------------------
app.post("/cars", async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json({ message: "Carro adicionado!", id: newCar.id });
  } catch (err) {
    res.status(400).json({ error: "Erro ao adicionar carro." });
  }
});
//--------------------------------------------------------------------------------------
app.delete("/cars", async (req, res) => {
  try {
    const id = req.body.id;
    const result = await Car.destroy({ where: { id } });

    if (result === 0) {
      return res.status(404).json({ error: "Carro não encontrado." });
    }

    res.json({ message: "Carro apagado.", affectedRows: result });
  } catch (err) {
    res.status(400).json({ error: "Erro ao apagar carro." });
  }
});
//--------------------------------------------------------------------------------------
app.delete("/cars/:plate", async (req, res) => {
  try {
    const result = await Car.destroy({
      where: { LicensePlate: req.params.plate },
    });

    if (result === 0) {
      return res.status(404).json({ error: "Carro não encontrado." });
    }

    res.json({
      message: "Carro apagado pela matrícula.",
      affectedRows: result,
    });
  } catch (err) {
    res.status(400).json({ error: "Erro ao apagar carro." });
  }
});
//--------------------------------------------------------------------------------------
app.get("/cars/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: "Carro não encontrado." });
    }

    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar carro." });
  }
});
//--------------------------------------------------------------------------------------
app.get("/cars/:brand/:model", async (req, res) => {
  try {
    const { brand, model } = req.params;
    const cars = await Car.findAll({ where: { Brand: brand, Model: model } });

    if (cars.length === 0) {
      return res.status(404).json({ error: "Nenhum carro encontrado." });
    }

    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar carros." });
  }
});
//--------------------------------------------------------------------------------------
app.put("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Car.update(req.body, { where: { id } });

    if (updated === 0) {
      return res.status(404).json({ error: "Carro não encontrado." });
    }

    const updatedCar = await Car.findByPk(id);
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar carro." });
  }
});

//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------

// const { DataTypes, Model,DataTypes, Sequelize } = require("sequelize");

// const sequelize = new Sequelize("mysql://root:123@localhost:3306/ficha9");

// module.exports=function(sequelize,Model,DataTypes){
// class Car extends Model {}
// Car.init({
//     Brand: DataTypes.STRING,
//       Model: DataTypes.STRING,
//       LicensePlate:  DataTypes.STRING,
//       Color: DataTypes.STRING,
//       Year: DataTypes.INTEGER,
//       Power: DataTypes.INTEGER,
//       Displacement: DataTypes.FLOAT,},
//       {sequelize, modelName:'car'},
// );
// return Car;
// };

// (async () => {
//   await sequelize.sync();
// })();

// (async () => {
//   await sequelize.sync();
//   const car = await Car.create({
//     Brand: "opel",
//     Model: "corsa",
//     LicensePlate: "12-34-AB",
//     Color: "GREY",
//     Year: "2002",
//     Power: 200,
//     Displacement: 300,
//   });
//   console.log(car.toJSON());
// })();

// (async () => {
//   const car  = await
//   await sequelize.sync();
// })();

// app.get("/cars",async(req,res)=>{
// const cars = await Car .findAll();
// res.send(cars);
// })
//--------------------------------------------------------------------------------------
//teste
app.get("/cars", function (req, res) {
  Car.findAll().then((cars) => {
    res.send(cars);
  });
});
//--------------------------------------------------------------------------------------
app.post("/cars", function (req, res) {
  Car.destroy({
    where: {
      id: req.body.id,
    },
  });
});
//--------------------------------------------------------------------------------------
app.delete("/cars", function (req, res) {
  Car.destroy(req.body).then((newCar) => {
    res.send("ID inserido: " + newCar.id);
  });
});
//--------------------------------------------------------------------------------------
// app.get("/cars", async (req, res) {
//  const cars =await Car.findAll();
//  res.send(cars);
// });
