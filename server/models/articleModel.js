const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User' },
  articleName:{type: String},
  weather: {type: String},
  color:{type: String},
	style: {type: String},
  category: {
    type: String,
    enum: ['top', 'bottom', 'shoes', 'accesory', 'underwear', 'other'],
    default: 'other'
  },
  image: { type: String, default: ''}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('article', articleSchema);
