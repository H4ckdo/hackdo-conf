const findOne = require('./findOne.js');
const findMultiples = require('./findMultiples.js');

module.exports = {
  args: {
    name: { type: GraphQLString }
  },
  resolve(root, args) {
    return {}
  },
  type: new GraphQLObjectType({
    name: 'usersQuery',
    fields: {
      findMultiples,
      findOne
    }
  })
}