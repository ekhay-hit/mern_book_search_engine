// import collection from models

//start resolvers
// Resolver is layer that connect API call or graphql to database
const resolvers = {
  // all get request inside Query
  Query: {
    // returning all the books
    books: async () => {
      return await Books.find({});
    },

    // return book by its id
    user: async (_, args) => {
      return await User.findById(args.id);
    },
  },
};

// export resolvers
module.exports = resolvers;
