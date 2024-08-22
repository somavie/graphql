const user = () => {
  return { id: 1, userName: "John Doe" };
};

const users = () => {
  return [
    { id: 0, userName: "Joe" },
    { id: 1, userName: "John Doe" },

    { id: 2, userName: "Doe" },

    { id: 3, userName: "Fikl" },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
