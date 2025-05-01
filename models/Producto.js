// src/models/Product.js
const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const productSchema = new Schema({
  // Nombre del producto
  nombre: {
    type: String,
    required: true
  },

  // Precio (Double en Mongo → Number en JS)
  precio: {
    type: Number,
    required: true
  },

  // Referencia a la categoría (campo categoria_id en tu BD)
  categoria_id: {
    type: Types.ObjectId,
    ref: 'categorias',
    required: true
  },

  // Cantidad en stock
  stock: {
    type: Number,
    default: 0
  },

  // Objeto de características arbitrarias
  caracteristicas: {
    type: Schema.Types.Mixed,
    default: {}
  }
}, {
  // Renombrar timestamp de creación a 'date_created' y deshabilitar updatedAt
  timestamps: { createdAt: 'date_created', updatedAt: false }
});

module.exports = mongoose.model('productos', productSchema);