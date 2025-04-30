const express = require('express');
const router = express.Router();
const Product = require('../models/Producto');

//Leer datos del producto
router.get('/',async (req,res) => {
    try {
        const list = await Product.find().populate('categoria_id');
        res.json(list);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});
//Crear un product
router.post('/', async (req,res) => {
    try {
        const prod = await new Product({
            nombre:             req.body.nombre,
            precio:             req.body.precio,
            categoria_id:       req.body.categoria_id,
            stock:              req.body.stock,
            caracteristicas:    req.body.caracteristicas
        }).save();
        res.status(201).json(prod);
    } catch (e) {
        res.status(400).json({error : e.message});
    }
});
module.exports = router;