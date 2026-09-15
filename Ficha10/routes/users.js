// var express = require("express");
// var router = express.Router();
// var usersController = require("../controllers/usersController");

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
// const { router } = require("../app");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
