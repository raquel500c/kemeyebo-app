var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  articleName:{type: String},
  weater: {type: String},
  color:{type: String},
	style: {type: String},
  category: {
    type: String,
    enum: ['top', 'bottom', 'shoes', 'accesory', 'underwear', 'other'],
    default: 'other'
  },
  image: {
    type: String,
    default: ''
  },
  // Owner: {type: Schema.Types.ObjectId, ref: 'User' },
  // setsList: [ { type: Schema.Types.ObjectId,  ref: 'setModel' } ],
  // bagList: [ { type: Schema.Types.ObjectId,  ref: 'bagModel' } ],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('article', articleSchema);
