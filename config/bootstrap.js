/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
const ApiTest = require("../newman_test.js");
module.exports.bootstrap = function(next) {
  next();
  // if(process.env.STAGING) {
  //   let newman = new ApiTest();
  //   newman.then(function(resonse) {
  //     console.log('API RESULT: ', resonse);
  //   })
  //   .catch(function(err) {
  //     console.log('err', err);
  //     process.exit(1);
  //   });
  // };
};
