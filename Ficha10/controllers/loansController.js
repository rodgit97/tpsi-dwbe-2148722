const { Loan, Book, User } = require("../models");
const sequelize = require("../db_sequelize");
const sequelize = require("sequelize");

async function getAllLoansFull(req, res, next) {
  var loans = await Loan.findAll({
    Include: [{ model: User }, { model: Book }],
  });
  res.send(loans);
}
async function getAllLoans(req, res, next) {
  var loans = await Loan.findAll();
  res.send(loans);
}
module.exports = {
  getAllLoansFull,
  getAllLoans,
};

// exports.getAllLoans = async (req, res) => {
//   try {
//     const loans = await Loan.findAll({ include: [Book, User] });
//     res.json(loans);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getLoanById = async (req, res) => {
//   try {
//     const loan = await Loan.findByPk(req.params.id, { include: [Book, User] });
//     if (loan) res.json(loan);
//     else res.status(404).json({ error: "empréstimo não encontrado" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.createLoan = async (req, res) => {
//   try {
//     const newLoan = await Loan.create(req.body);
//     res.status(201).json(newLoan);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateLoan = async (req, res) => {
//   try {
//     await Loan.update(req.body, { where: { loan_id: req.params.id } });
//     res.json({ success: "empréstimo atualizado com sucesso" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteLoan = async (req, res) => {
//   try {
//     await Loan.destroy({ where: { loan_id: req.params.id } });
//     res.json({ success: "empréstimo removido com sucesso" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
