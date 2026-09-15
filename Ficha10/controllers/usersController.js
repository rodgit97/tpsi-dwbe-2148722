const User = require("../db_sequelize").User;
const sequelize = require("../db_sequelize");
// const sequelize = require("sequelize");

async function getAllUsers(req, res) {
  var users = await User.findAll();
  // res.send("isto é um contorller de utilizadores");
  res.send(users);
}

module.exports = { getAllUsers };
