module.exports = (sequelize, DataTypes) => {
    const Loan = sequelize.define(
      "Loan",
      {
        loan_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        loan_date: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        return_date: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        tablename: "loans",
        timestamps: true,
      }
    );
    return Loan;
  };
  