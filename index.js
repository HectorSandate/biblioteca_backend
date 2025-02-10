const express = require('express');
const cors = require('cors'); // ✅ Importar CORS
const sequelize = require('./config/database');
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Habilitar CORS para todas las IPs
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/books', booksRouter);

// Sincronización con la base de datos
sequelize.sync().then(() => {
  console.log('📦 Base de datos sincronizada');

  // ✅ Asegúrate de que el servidor escuche en todas las interfaces
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
  });
});
