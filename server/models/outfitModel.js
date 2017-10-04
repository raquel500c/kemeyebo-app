const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const outfitSchema = new Schema({
	'owner' : { type: Schema.Types.ObjectId, ref: 'User'},
	'name' : String,
	'wheater' : String,
	'color' : String,
	'style' : String,
	'num-articles' : Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('outfit', outfitSchema);
