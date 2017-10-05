const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const outfitSchema = new Schema({
	owner : { type: Schema.Types.ObjectId, ref: 'User'},
	articlesList : [ { type: Schema.Types.ObjectId,  ref: 'article' } ],
	name : String,
	season: {
		type: String,
		enum: ['primavera', 'verano', 'otoño','invierno','todas'],
		default: ''
	},
	colorsRange:{
		type: String,
		enum: ['blanco', 'crema', 'gris','negro','azul','rojo','amarillo',
	'verde','morado','naranja','rosa','plateado','dorado', 'marrón',''],
		default: ''
	},
	style: {
    type: String,
    enum: ['informal', 'casual', 'deporte', 'fiesta','formal','formal-playa','etiqueta',''],
    default: ''
	},
	notes: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('outfit', outfitSchema);
