const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const outfitSchema = new Schema({
	owner : { type: Schema.Types.ObjectId, ref: 'User'},
	articlesList : [ { type: Schema.Types.ObjectId,  ref: 'article' } ],
	outfitName : String,
	weather: {
    type: String,
    enum: ['spring', 'summer', 'fall','winter',''],
    default: ''
  },
  color: String,
	style: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('outfit', outfitSchema);
