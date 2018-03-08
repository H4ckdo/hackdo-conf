const usersType = require('../../types/usersType.js');

const args = {
  name: { type: GraphQLString },
  contains: { type: GraphQLBoolean }
}

const resolve = async function (root, args) {
  let { name = null, contains = false } = args;
  if (name) return await Users.find(fieldContains({ name }, contains));
}

module.exports = {
  type: GraphQLList(usersType),
  args,
  resolve
}