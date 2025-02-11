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
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El nombre del libro no puede estar vacío.'
      },
    },
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'El ISBN debe ser único.'
    },
    validate: {
      notEmpty: {
        msg: 'El ISBN no puede estar vacío.'
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
}, {
  timestamps: false  // ✅ Configuración correcta para desactivar createdAt y updatedAt
});

module.exports = Book;
