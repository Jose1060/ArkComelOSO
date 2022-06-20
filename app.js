require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const connectDB = require("./db");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const app = express();
connectDB();
app.get("/", (req, res) => res.send("Welcome to the GraphQL API ARK "));

module.exports = app;

async function start() {
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
	});

	await apolloServer.start();
	apolloServer.applyMiddleware({ app });

	app.use("*", (res) => res.status(404).send("Not found"));
	app.listen(process.env.PORT, () => {
		console.log(`Server started on port ${process.env.PORT}`);
	});
}

start();
