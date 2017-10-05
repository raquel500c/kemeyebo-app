var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bagSchema = new Schema({
	'owner' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'articlesList' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'article'
	},
	'outfitsList' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'outfit'
	},
	'travelName' : String,
	'travelDate' : Date,
	'travelDays' : Number,
	'notes': String
});

module.exports = mongoose.model('bag', bagSchema);
