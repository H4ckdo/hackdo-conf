const newman = require('newman');
const collection = require("./hackdo_website.postman_collection.json");
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
          if(summary.failures && summary.failures.length != 0) return reject(summary.failures);
          return resolve(summary);
      });
    })
  )
};
