const { Loan, Book, User } = require("../models");
const sequelize = require("../db_sequelize");
const sequelize = require("sequelize");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [{ model: Loan, include: [User] }],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: [{ model: Loan, include: [User] }],
    });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Livro não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: "erro ao criar um livro",
      details:err.message
     });
  }
};

exports.updateBook = async (req, res) => {
  try {
    await Book.update(req.body, { where: { book_id: req.params.id } });
    res.json({ success: "Livro atualizado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.destroy({ where: { book_id: req.params.id } });
    res.json({ success: "Livro removido com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//---------------------------------------------------
exports.getAllBook = function (req, res, next) {
  Book.findAll().then((users) => {
    res.render("user", { title: "Users", data: users });
  });
};
