import { ApolloServer } from "@apollo/server";
import User from "./Users/UserIndex";

async function graphqlServer() {
  const apolloServer = new ApolloServer({
    typeDefs: `
        type Query{
            ${User.queries}
        }
    
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
  });

  await apolloServer.start();
  return apolloServer;
}

export default graphqlServer;
