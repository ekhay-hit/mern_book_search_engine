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
       await User.findById(args.id);
    },
  },


Mutation:{

     // Login mutation
   loginUser: async(_,{email, password})=>{
     const profile = User.findOne({email});
     if(!profile){
         // return res.status(404).json("No profile found");
         throw AuthenticationError;
     }
     const passwordIsValid = await profile.isCorrectPassword(password);
     if(!passwordIsValid){
         // throw new Error("Password is not valid");
         throw AuthenticationError;
         
     }
     const token = signToken(profile)
     return {token, profile};
    //  return profile;
   }

   // Singup Mutation
 addUser: async (parent, {name,email, password})=>{
        const user = await User.create({name,email, password});
       const token = signToken(user);
       return {token, profile}
   }




}
};

// export resolvers
module.exports = resolvers;
