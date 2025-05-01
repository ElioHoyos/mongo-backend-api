const express = require('express');
const router  = express.Router();
const Product = require('../models/Producto');

// Crear producto
router.post('/', async (req, res) => {
  try {
    const prod = await new Product({
      nombre:          req.body.nombre,
      precio:          req.body.precio,
      categoria_id:    req.body.categoria_id,
      stock:           req.body.stock,
      caracteristicas: req.body.caracteristicas
    }).save();
    res.status(201).json(prod);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Listar productos (con categoría poblada)
router.get('/', async (req, res) => {
  try {
    const list = await Product.find().populate('categoria_id');
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Obtener por ID
router.get('/:id', async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id).populate('categoria_id');
    if (!prod) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(prod);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Actualizar producto
router.put('/:id', async (req, res) => {
  try {
    const prod = await Product.findByIdAndUpdate(
      req.params.id,
      {
        nombre:          req.body.nombre,
        precio:          req.body.precio,
        categoria_id:    req.body.categoria_id,
        stock:           req.body.stock,
        caracteristicas: req.body.caracteristicas
      },
      { new: true }
    );
    if (!prod) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(prod);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    const prod = await Product.findByIdAndDelete(req.params.id);
    if (!prod) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
