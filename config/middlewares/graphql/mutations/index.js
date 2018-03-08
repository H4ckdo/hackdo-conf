let { GraphQLObjectType } = require('graphql');
const users = require('./users/index.js');

module.exports = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    users
  }
})