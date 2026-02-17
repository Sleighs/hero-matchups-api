var mongoose = require("mongoose")

mongoose.set('debug', true);

const schema = mongoose.Schema({
	name: {type: String},
	type: {type: String},
	counters: {type: Object},
	archetype: {type: Array},
	realName: {type: String},
	aliases: {type: mongoose.Schema.Types.Mixed},
	difficulty: {type: Number},
	skill: {type: Number},
	role: {type: String},
	health: {type: mongoose.Schema.Types.Mixed},
	armor: {type: mongoose.Schema.Types.Mixed},
	shields: {type: mongoose.Schema.Types.Mixed},
	birth: {type: String},
	age: {type: Number},
	ages: {type: Object},
	nationality: {type: String},
	occupation: {type: mongoose.Schema.Types.Mixed},
	base: {type: mongoose.Schema.Types.Mixed},
	affiliation: {type: mongoose.Schema.Types.Mixed},
	voice: {type: mongoose.Schema.Types.Mixed},
	quotes: {type: Array},
	status: {type: String},
	relations: {type: Array},
  subRole: {type: String}
}, { collection: 'heroes' })

module.exports = mongoose.model("Hero", schema)