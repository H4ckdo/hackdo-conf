const exec = require('child_process').exec;
module.exports = function() {
  return (new Promise(function(resolve, reject) {
    console.log("TRY API TEST");
      exec(`newman -h`, (err, stdout, stderr) => {
        if (err) return reject(err);
        return resolve(stdout);
      });
    })
  )
};
