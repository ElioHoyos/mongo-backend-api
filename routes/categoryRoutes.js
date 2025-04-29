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

module.exports = router;