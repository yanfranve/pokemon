const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hp: {
        type: DataTypes.STRING,
      },
      atack: {
        type: DataTypes.STRING,
      },
      defense: {
        type: DataTypes.STRING,
      },
      speed: {
        type: DataTypes.STRING,
      },
      heigth: {
        type: DataTypes.STRING,
      },
      welqht: {
        type: DataTypes.STRING,
      },
      Image: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
