const sequelize = require("sequelize");

const { router } = require("./app");

// const { Sequelize, Model, DataTypes } = require("sequelize");
const { Sequelize, DataTypes } = require("sequelize");

//-------------------------------------------------

const sequelize = new Sequelize("biblioteca", "root", "123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },
});
//-------------------------------------------------

const User = require("./models/User")(sequelize, DataTypes);
const Book = require("./models/Book")(sequelize, DataTypes);
const Loan = require("./models/Loan")(sequelize, DataTypes);
//-------------------------------------------------

Book.hasMany(Loan, { foreignKey: "book_id" });
User.hasMany(Loan, { foreignKey: "user_id" });
// Loan.hasMany(Book, { foreignKey: "book_id" });
// Loan.hasMany(User, { foreignKey: "user_id" });

// Book.belongsTo(Loan, { foreignKey: "book_id" });
// User.belongsTo(Loan, { foreignKey: "user_id" });
Loan.belongsTo(Book, { foreignKey: "book_id" });
Loan.belongsTo(User, { foreignKey: "user_id" });

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("As tabelas foram criadas com sucesso");
  })
  .catch((err) => {
    console.log("Erro na sincronização com modelos:", err);
  });
module.exports = sequelize;
//-------------------------------------------------
// function initializeData
async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("as tabelas foram criadas");

    const user = await User.create({
      first_name: "Alguem",
      last_name: "ai?",
      email: "algai@hot.com",
      address: "camara lobos",
      phone_number: "123456789",
    });
    const book = await Book.create({
      title: "titulo do livro",
      author_name: "antonio antonieta",
      publication_date: "02/12/22",
      genre: "informativo",
      available_copies: 500,
    });
    const loan = await Loan.create({
      loan_date: "12/04/23",
      return_date: "03/03/25",
      user_id: user.user_id,
      book_id: book.book_id,
    });
    console.log("dados de teste criados com successo");
  } catch (err) {
    console.error("Erro na base de dados: ", err);
  }
};
// {
//   async () => {
//     await sequelize.sync({ force: true });

//     const user = await User.create({
//       first_name: "Alguem",
//       last_name: "ai?",
//       email: "algai@hot.com",
//       address: "camara lobos",
//       phone_number: "123456789",
//     });
//     const book = await Book.create({
//       title: "titulo do livro",
//       author_name: "antonio antonieta",
//       publication_date: "02/12/22",
//       genre: "informativo",
//       available_copies: 500,
//     });
//     const loan = await Loan.create({
//       loan_date: "12/04/23",
//       return_date: "03/03/25",
//     });
//   };
// }

// async function getAllLoansFull(req, res, next) {
//   var loans = await Loan.findAll({
//     Include: [{ model: User }, { model: Book }],
//   });
//   res.send(loans);
// }
// async function getAllLoans(req, res, next) {
//   var loans = await Loan.findAll();
//   res.send(loans);
// }

module.exports = {
  Sequelize,
  Loan,
  Book,
  User,
};
