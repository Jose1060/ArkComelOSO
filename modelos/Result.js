const { Schema, model } = require("mongoose");
const Rest = require("./Restaurantes");

const resultSchema = new Schema({
	restaurantes: { type: [Rest], required: true },
	total: { type: Number, required: true },
	timeStamp: { type: Date, required: true },
	user: { type: String, required: true },
});

module.exports = model("Result", resultSchema);
