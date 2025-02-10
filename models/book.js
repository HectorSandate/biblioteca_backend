const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // ❌ No permite valores nulos
    validate: {
      notEmpty: {
        msg: 'El nombre del libro no puede estar vacío.' // ✅ Mensaje de error personalizado
      },
    },
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false, //  No permite valores nulos
    unique: {
      msg: 'El ISBN debe ser único.' // ✅ Asegura que no haya duplicados
    },
    validate: {
      notEmpty: {
        msg: 'El ISBN no puede estar vacío.' // ✅ Valida que no esté vacío
      },
    },
  },
  status: {
    type: DataTypes.ENUM('Prestado', 'Perdido', 'Disponible'),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = Book;
