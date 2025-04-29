const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const productSchema = new Schema({
    //Nombre del producto
    nombre:
    {
        type:String,
        required:true
    },
    //precio (Double,decimal -> Number)
    precio:
    {
        type:Number,
        required:true
    },
    //referencia a la colleción categorias
    categoria_id:
    {
        type: Types.ObjectId,
        ref: 'categorias',
        required:true
    },
    //cantidad en stock
    stock:
    {
        type: Number,
        default:0
    },
    //caracteristicas
    caracteristicas:
    {
        type: Schema.Types.Mixed,
        default:{}
    },
    date_created:{
        type:Date,
        default: Date.now
    }
});
module.exports = mongoose.model('productos', productSchema);