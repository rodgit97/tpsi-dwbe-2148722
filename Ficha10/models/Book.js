module.exports = (sequelize) => {
  const Book = sequelize.define(
    "Book",
    {
      book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      author_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      publication_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      available_copies: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tablename: "books",
      timestamps: true,
    }
  );
  return Book;
};
