const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema ({
	name : {
		type: String,
		required: true
	},
	title : {
		type: String,
		required: true
	},
	location : {
		type: String,
		required: true
	},
	description : {
		type: String,
		required: true
	},
	date : {
		type: Date,
		required: true
	},
	day : {
		type: String,
		required: true
	},
	month : {
		type: String,
		required: true
	},
	year : {
		type: String,
		required: true
	},
	time : {
		type: String,
		required: true
	},
	price : {
		type: String,
		required: true
	},
	main : {
		type: String,
		required: true
	},
	display : {
		type: String,
		required: true
	},
	posted : {
		type: Date,
		default: Date.now
	},
	registrations : {
		type: Array,
		default: []
	}
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;
