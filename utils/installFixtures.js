/**
 * @function installFixtures
 * @param  {type} fixtures {description}
 * @return {type} {description}
 */
const installFixtures = (fixtures) => {
  let result = {};
  let models = _.keys(fixtures);
  for (model of models) {
    let collections = fixtures[model];
    for (collection of collections) {
      if (_.has(global, model)) {
        let data = new global[model](collection);
      } else {
        let error = new Error('Model does not exist');
        error.description = `The model ${model} is undefined, check the list of available models: ${availableModels}`;
        throw error;
      }
      //console.log(data);
    }
  }
  return "Fixtures installed";
}

module.exports = installFixtures;