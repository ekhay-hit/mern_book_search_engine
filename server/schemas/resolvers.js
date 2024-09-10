// import collection from models
const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
//start resolvers
// Resolver is layer that connect API call or graphql to database
const resolvers = {
  // all get request inside

  Query: {
    // returning all the books
    // books: async () => {
    // return await Books.find({});
    // },
    me: async (parent, _, { user }) => {
      // if no user return eror no user login
      if (!user) {
        throw new Error("Not authenticated");
      }
      // else try to find the authenticated user base on its id
      try {
        const currentUser = await User.findById(user._id);
        // if cannot find it by id return the message
        if (!currentUser) {
          throw new Error("User not found");
        }

        // if success retun the auth user
        return currentUser;
      } catch (err) {
        throw new Error("Faild to get user");
      }
    },

    // return book by its id
    user: async (_, args) => {
      await User.findById(args.id);
    },
  },

  Mutation: {
    // Login mutation
    loginUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        // return res.status(404).json("No profile found");
        throw new AuthenticationError("No profile found");
      }
      const passwordIsValid = await user.isCorrectPassword(password);
      if (!passwordIsValid) {
        // throw new Error("Password is not valid");
        throw new AuthenticationError("Invalid password");
      }
      const token = signToken(user);
      return { token, user };
      //  return profile;
    },

    // Singup Mutation
    addUser: async (_, { username, email, password }) => {
      console.log("I am in mutation");
      console.log(username);
      console.log(email);
      console.log(password);
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.error("Error creating the new user", err);
        throw new Error(`Error creating user: ${err.message}`);
      }
    },

    // save book mutation
    saveBook: async (_, { book }, context) => {
      try {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: book } },
            { new: true, runValidators: true }
          );
          if (!updatedUser) {
            throw new Error("user with request id not found");
          }
          return updatedUser;
        }
      } catch (err) {
        throw new Error("Failed to save the book");
      }
    },

    // Delete book mutation
    deleteBook: async (_, { params }, context) => {
      try {
        if (context.user) {
          const updatedUser = await User.findOneAndDelete(
            // the user id that we need to find
            { _id: context.user._id },
            // pull the book from that array to delete it
            { $pull: { savedBooks: { bookId: params.bookId } } },
            // return the new
            { new: true }
          );

          if (!updatedUser) {
            throw new Error("User not found");
          }
          return updatedUser;
        }
      } catch (err) {
        throw new Error("Failed to delete the book");
      }
    },
  },
};

// export resolvers
module.exports = resolvers;
