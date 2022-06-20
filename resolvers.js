const Restaurante = require("./modelos/Restaurantes");

const resolvers = {
	Query: {
		hello: () => "Hello world!",
	},
};

module.exports = { resolvers };
