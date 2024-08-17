import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,

  resolvers: {
    Query: {
      user: () => {
        return { id: 1, userName: "John Doe" };
      },

      users: () => {
        return [
          { id: 0, userName: "Joe" },
          { id: 1, userName: "John Doe" },

          { id: 2, userName: "Doe" },

          { id: 3, userName: "Fikl" },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Servidor em Cima ${url}`);
});
