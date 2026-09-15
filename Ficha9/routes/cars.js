// const { DataTypes, Model,DataTypes, Sequelize } = require("sequelize");
// // const sequelize = require("../db");
// const sequelize = new Sequelize("mysql://root:123@localhost:3306/ficha8");

// class Car extends Model {}
// // const car = sequelize.define("Car", {
// Car.init({
//     Brand: {
//         type: DataTypes.STRING,
//         // allowNull: false,
//       },
//       Model: {
//         type: DataTypes.STRING,
//         // allowNull: false,
//       },
//       LicensePlate: {
//         type: DataTypes.STRING,
//         // allowNull: false,
//         // unique: true,
//       },
//       Color: {
//         type: DataTypes.STRING,
//         // allowNull: false,
//       },
//       Year: {
//         type: DataTypes.INTEGER,
//         // allowNull: false,
//       },
//       Power: {
//         type: DataTypes.INTEGER,
//         // allowNull: false,
//       },
//       Displacement: {
//         type: DataTypes.FLOAT,
//         // allowNull: false,
//       },
//       {sequelize, modelName:'car'}
// })
// //   Brand: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   Model: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   LicensePlate: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //     unique: true,
// //   },
// //   Color: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   Year: {
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// //   },
// //   Power: {
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// //   },
// //   Displacement: {
// //     type: DataTypes.FLOAT,
// //     allowNull: false,
// //   },
// // });

// module.exports = Car;

const express = require("express");
const router = express.Router();
const Car = require("../models/cars");

router.get("/", async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Erro ao obter os carros." });
  }
});

router