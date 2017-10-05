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
	'bagName' : String,
	'date' : Date,
	'numDays' : Number
});

module.exports = mongoose.model('bag', bagSchema);
