const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const outfitSchema = new Schema({
	owner : { type: Schema.Types.ObjectId, ref: 'User'},
	articlesList : [ { type: Schema.Types.ObjectId,  ref: 'articleModel' } ],
	outfitName : String,
	weather: String,
  color: String,
	style: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('outfit', outfitSchema);
