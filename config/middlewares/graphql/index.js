const graphqlHTTP = require('express-graphql');
const mutation = require('./mutations/index.js');
const query = require('./queries/index.js');
const isOnDevelopment = process.env.NODE_ENV === "development";
const schema = new GraphQLSchema({
  query,
  mutation
})

module.exports = () => {
  let payload = graphqlHTTP({
    schema,
    graphiql: isOnDevelopment
  })
  let path = '/graphql';
  return { payload, path }
}

