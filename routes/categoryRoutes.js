const express = require('express')
const router = express.Router();
const Category = require('../models/Categoria');

//Listar las categorias "EndPoint"
router.get('/', async (req,res) => {
    try {
        const list = await Category.find();
        res.json(list);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

//Crear Categorias
router.post('/', async (req,res) => {
    try {
        const cat = await Category({
            nombre:         req.body.nombre,
            descripcion:    req.body.descripcion
        }).save();
        res.status(201).json(cat);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
});

module.exports = router;