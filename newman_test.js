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
      }, function (err) {
          if (err) return reject(err);
          console.log('collection run complete!');
      });
    })
  )
};
