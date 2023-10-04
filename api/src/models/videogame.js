const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Define la estructura de la tabla Videogame
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};

