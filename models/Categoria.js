const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String },
    date_created: { type: Date, default: Date.now },
  }
);

module.exports = mongoose.model("categorias", categorySchema);
