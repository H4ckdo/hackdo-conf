const surePromise = require('./surePromise.js');
const prometify = require('./prometify.js');
const installFixtures = require('./installFixtures.js');
const fieldContains = require('./fieldContains.js');
const pickHandlers = require('./pickHandlers.js');

exports.fieldContains = fieldContains;
exports.prometify = prometify;
exports.surePromise = surePromise;
exports.AttachMethods = function(target) {
  try {
    //debugger;
    pickHandlers(routes, target, target.name);
  } catch (error) {
    console.log(error);
  }
}
exports.installFixtures = (fixtures) => surePromise(
  prometify(installFixtures.bind(installFixtures, fixtures))
)