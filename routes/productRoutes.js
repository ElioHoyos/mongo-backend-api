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
module.exports = router;