const newman = require('newman'); // require newman in your project
module.exports = function() {
  return (new Promise(function(resolve, reject) {
      console.log("TRY API TEST");
      newman.run({
          collection: require("./hackdo_website.postman_collection.json"),
          reporters: 'cli',
          bail: true
      }, function (err) {
          if (err) return reject(err);
          console.log('collection run complete!');
      });
    })
  )
};
