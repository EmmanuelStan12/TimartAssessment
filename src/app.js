const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const db = require('./config/database');
const {typeDefs, resolvers} = require('./graphql');

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });
    await server.start();
    const app = express();

    server.applyMiddleware({app});
    const PORT = process.env.PORT || 4000;

    db.initiate_db_connection()
        .then(() => {
            app.listen(PORT, () =>
                console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`)
            );
        })
        .catch(e => {
            console.log(e);
        })

    process.on('SIGINT', () => {
        db.close_db_connection()
            .then(() => {
                console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath} stopped successfully`)
            })
            .catch(e => {
                console.log(e);
            })
    });

}

startApolloServer().catch((err) => console.error(err));

