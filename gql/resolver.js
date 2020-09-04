const userController = require("../controllers/user");

const resolvers = {
  Query: {
    //User
    getUser: (_, { id, username }) => userController.getUser(id, username),
  },
  Mutation: {
    // User Register
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
  },
};

module.exports = resolvers;
