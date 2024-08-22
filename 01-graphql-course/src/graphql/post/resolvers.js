const post = () => {
  return {
    id: 1,
    title: "My First Post",
  };
};

const posts = () => {
  return [
    {
      id: 1,
      title: "My second Post",
    },
    {
      id: 2,
      title: "My sizre Post",
    },
    {
      id: 3,
      title: "My thirth Post",
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
