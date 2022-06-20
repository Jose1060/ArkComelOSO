const Restaurante = require("./modelos/Restaurantes");

const resolvers = {
	Query: {
		hello: () => "Hello world!",
		getRestaurantes: () => Restaurante.find(),
	},
};

module.exports = { resolvers };
