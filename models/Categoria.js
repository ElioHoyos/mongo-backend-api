const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({

    nombre:
    {
        type: String,
        required: true,
        unique: true
    },
    descripcion:
    {
        type: String
    },
    created_at:
    {
        type: Date,
        default: Date.now
    },

});
module.exports = mongoose.model("categorias",categorySchema);