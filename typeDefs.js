const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Restaurante {
		id: ID
		nombre: String
		direccion: String
		telefono: String
		email: String
		imagen: String
		descripcion: String
	}

	type Result {
		restaurantes: [Restaurante]
		total: Int
		timeStamp: String
		user: String
	}

	type Query {
		hello: String
		getRestaurantes: [Restaurante]
	}
`;

module.exports = { typeDefs };
