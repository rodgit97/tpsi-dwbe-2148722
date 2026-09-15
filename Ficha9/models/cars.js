module.exports = function (sequelize, Model, DataTypes) {
  class Car extends Model {}
  Car.init(
    {
      Brand: DataTypes.STRING,
      Model: DataTypes.STRING,
      LicensePlate: DataTypes.STRING,
      Color: DataTypes.STRING,
      Year: DataTypes.INTEGER,
      Power: DataTypes.INTEGER,
      Displacement: DataTypes.FLOAT,
    },
    { sequelize, modelName: "car" }
  );
  return Car;
};
