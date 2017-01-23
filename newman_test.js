const newman = require('newman');
const collection = require("./hackdo_web_api_test.postman_collection.json");
const PORT = process.env.PORT || 1337;

module.exports = function() {
  return (new Promise(function(resolve, reject) {
      console.log("TRY API TEST");
      newman.run({
          collection: collection,
          reporters: 'cli',
          bail: true,
          globals: [{
            "key": "PORT",
            "value": PORT,
            "type": "text",
            "enabled": true
          }]
      }, function (err, summary = {}) {
          if(err) return reject(err);
          if(summary.error) return reject(summary.error);
          if(summary.run.failures && summary.run.failures != 0) return reject(summary.run.failures);
          return resolve(summary);
      });
    })
  )
};
