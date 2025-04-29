require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//importar las rutas de routes
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

//Ruta de la API
app.use('/v1/api/categorias', categoryRoutes);
app.use('/v1/api/productos', productRoutes);

//conexion a mongoDB y arranque del servidor
mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Conexión Exitosa a MongoDB');
    app.listen(process.env.PORT, () => {
        console.log(`Servidor corriendo correctamente en http://localhost:${process.env.PORT}`)
    });
  })
  .catch(err => console.error('Error al conectar MongoDB: ', err.message));