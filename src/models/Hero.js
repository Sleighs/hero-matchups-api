var mongoose = require("mongoose")

mongoose.set('debug', true);

const schema = mongoose.Schema({
	name: {type: String},
	type: {type: String},
	counters: {type: Object},
	archetype: {type: Array}
}, { collection: 'heroes' })

module.exports = mongoose.model("Hero", schema)