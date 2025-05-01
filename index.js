require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes  = require('./routes/productRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/categorias', categoryRoutes);
app.use('/api/productos',   productRoutes);

// Conexión a MongoDB y arranque del servidor
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error('Error al conectar a MongoDB:', err.message));
