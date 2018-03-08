const usersType = require('../../types/usersType.js');
const update = require('../../mutations/users/update.js');

const args = {
  id: { type: GraphQLID },
  name: { type: GraphQLString },
  contains: { type: GraphQLBoolean }
}

const resolve = async function (root, args) {
  let { id = null, name = null, contains = false } = args;
  if (id) return await Users.findById(id);
  if (name) return await Users.findOne(fieldContains({ name }, contains));
}

module.exports = {
  type: new GraphQLObjectType({
    name: 'propio',
    fields: {
      name: { type: GraphQLString },
      otro: {
        type: new GraphQLObjectType({
          name: 'otro',
          fields: {
            name: { type: GraphQLString }
          }
        }),
        args: {
          name: { type: GraphQLString },
        },
        resolve: (root, arg) => {          
          return { name: arg.name }
        }      
      }
    },
    resolve() {
      return {}
    }
  }),
  args,
  resolve
}