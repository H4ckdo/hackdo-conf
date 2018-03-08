const users = require('./users/index.js');

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users
  }  
})
