const express  = require('express');
const router   = express.Router();
const Category = require('../models/Categoria');

// Crear categoría
router.post('/', async (req, res) => {
  try {
    const cat = await new Category({
      nombre:      req.body.nombre,
      descripcion: req.body.descripcion
    }).save();
    res.status(201).json(cat);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Listar todas
router.get('/', async (req, res) => {
  try {
    const list = await Category.find();
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Obtener por ID
router.get('/:id', async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    if (!cat) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(cat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const cat = await Category.findByIdAndUpdate(
      req.params.id,
      {
        nombre:      req.body.nombre,
        descripcion: req.body.descripcion
      },
      { new: true }
    );
    if (!cat) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(cat);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    const cat = await Category.findByIdAndDelete(req.params.id);
    if (!cat) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json({ message: 'Categoría eliminada' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
