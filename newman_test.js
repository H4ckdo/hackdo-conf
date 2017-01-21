const newman = require('newman');
const collection = require("./hackdo_website.postman_collection.json");

module.exports = function() {
  return (new Promise(function(resolve, reject) {
      console.log("TRY API TEST");
      newman.run({
          collection: collection,
          reporters: 'cli',
          bail: true,
          globals: [{
            "key": "PORT",
            "value": 1337,
            "type": "text",
            "enabled": true
          }]
      }, function (err) {
          if (err) return reject(err);
          console.log('collection run complete!');
      });
    })
  )
};
