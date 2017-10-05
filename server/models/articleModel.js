const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

const articleSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User' },
  articleName: String,
  weather: {
    type: String,
    enum: ['spring', 'summer', 'fall','winter',''],
    default: ''
  },
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
