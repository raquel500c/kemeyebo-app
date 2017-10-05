const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

const articleSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User' },
  image: { type: String, default: ''},
  name: String,
  season: {
    type: String,
    enum: ['primavera','verano','otoño','invierno','todas'],
    default: 'todas'
  },
  colorsRange:{
    type: String,
    enum: ['blanco', 'crema', 'gris','negro','azul','rojo','amarillo',
  'verde','morado','naranja','rosa','plateado','dorado', 'marrón']
  },
	style: {
    type: String,
    enum: ['informal', 'casual', 'deporte', 'fiesta','formal','formal-playa','etiqueta','varios']  
  },
  category: {
    type: String,
    enum: ['parte de arriba', 'parte de abajo', 'cuerpo entero', 'calzado', 'accesorio', 'ropa interior', 'otra'],
    default: 'otra'
  },
  notes: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('article', articleSchema);
