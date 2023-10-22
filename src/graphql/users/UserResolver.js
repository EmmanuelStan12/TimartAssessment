const { createUser, getUserById } = require("../../services/UserService");
const {validatePassword, hashPassword} = require("../../utils/PasswordUtils");

const userResolvers = {
    Query: {
        getUserById: async (_, { id }) => {
            try {
                return await getUserById(id);
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        },
    },
    Mutation: {
        createUser: async (_, args) => {
            try {
                if (!validatePassword(args.password)) {
                    throw new Error('Password is invalid')
                }
                let [salt, password] = hashPassword(args.password)
                args.password = password;
                args.salt = salt;
                return await createUser(args);
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        },
    }
}

module.exports = userResolvers;