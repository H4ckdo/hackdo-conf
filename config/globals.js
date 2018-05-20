const { surePromise, prometify, fieldContains, AttachMethods } = require('../utils/index.js');
const routes = require('./anchors/routes.json');
const _ = require('lodash');
const mongoose = require('mongoose');

const dependencies = {
  routes,
  AttachMethods,
  surePromise,
  prometify,
  mongoose,
  _
}

/**
 * @function setDependencies
 * @param  {type} const globalDependencies {description}
 * @return {type} {description}
 */
const setDependencies = dependencies => {
  _.each(_.keys(dependencies), dependencie => global[dependencie] = dependencies[dependencie])
}

module.exports = () => prometify(
  setDependencies.bind(setDependencies, dependencies)
)
