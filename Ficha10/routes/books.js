// var express = require("express");
// var router = express.Router();

// const { router } = require("../app");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/books", function (req, res, next) {
  res.send("Aqui tem livros");
});
router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.createBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
