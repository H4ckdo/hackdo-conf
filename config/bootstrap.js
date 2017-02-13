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
  next();//LIFT APP
  if(process.env.TEST) {
    let newman = new ApiTest();
    newman.then(function(response) {
      // console.log('API RESULT: ', response);
      process.exit(0);
    })
    .catch(function(err) {
      console.log('err', err);
      process.exit(1);
    });
  };
};
