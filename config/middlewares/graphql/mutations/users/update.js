let {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} = require('graphql');
const usersType = require('../../types/usersType.js');

const resolve = async (root, args) => {
  return await Users.findAndUpdate(args.id, args.data);
}

module.exports = {
  name: 'update',
  type: usersType,
  resolve,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
  }
}
