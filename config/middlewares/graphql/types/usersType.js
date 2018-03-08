module.exports = new GraphQLObjectType({
  name: 'usersType',
  description: '....',
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLID }
    //id: { type: new GraphQLNonNull(GraphQLID) }
  })
})
