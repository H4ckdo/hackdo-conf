let {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} = require('graphql');
const usersInput = require('../users/index.js');

const resolve = async (root, args) => {
  return await users.findByIdAndRemove(args.input);
}

const deleteInputTypes = new GraphQLInputObjectType({
  name: 'deleteInputTypes',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) }
  })
})

module.exports = new GraphQLObjectType({
  name: 'deleteMutation',
  description: 'create mutation',
  fields: () => ({
    type: usersInput,
    args: {
      input: {
        name: 'input',
        type: deleteInputTypes
      }
    },
    resolve
  })
})
