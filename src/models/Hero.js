var mongoose = require("mongoose")

mongoose.set('debug', true);

const schema = new mongoose.Schema({
	name: {type: String},
	type: {type: String}
}
, { collection: 'heroes' }
)

module.exports = mongoose.model("Hero", schema)