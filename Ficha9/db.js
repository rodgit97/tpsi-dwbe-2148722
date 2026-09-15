const { sequelize } = require("sequelize");

const sequelize = new sequelize("ficha9", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
