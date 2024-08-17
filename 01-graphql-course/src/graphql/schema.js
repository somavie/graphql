import { gql } from "apollo-server-core";

const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => "Hello, World!",
  },
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];
