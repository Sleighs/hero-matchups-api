const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	type: String,
})

module.exports = mongoose.model("Hero", schema)