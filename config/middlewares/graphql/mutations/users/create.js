let {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} = require('graphql');
const usersType = require('../../types/usersType.js');

const resolve = async (root, args) => {
  //debugger;
  return await Users.create(args);
}

const args = {
  name: { type: GraphQLString }
}
 
module.exports = {
  type: usersType,
  args,
  resolve
}
