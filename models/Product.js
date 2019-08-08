var mongoose = require('../config/db');

var ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required:true
	}, 
	size: {
		type: String,
		required:true
	}, 
	image: {
		type: String,
		required:true
	}, 
	date: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: Number,
		required:true
	}
});

module.exports = mongoose.model('Product', ProductSchema);