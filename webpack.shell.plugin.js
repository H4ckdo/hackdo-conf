'use strict';

var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  console.log(stdout);
}

function WebpackShellPlugin(options) {
  var defaultOptions = {
    onBuildStart: [],
    onBuildEnd: []
  };

  this.options = Object.assign(defaultOptions, options);
}

WebpackShellPlugin.prototype.apply = function (compiler) {
  const options = this.options;

  compiler.plugin("watch-run", (watching, cb) => {
    if (options.onBuildStart.length) {
      console.log("Executing pre-build scripts");
      options.onBuildStart.forEach(async script => await exec(script, (error, stdout, stderr) => {
        puts(error, stdout, stderr);
        console.log("Pre-build done");
        cb();
      }));
      //cb();
    }
  });

  compiler.plugin("emit", (compilation, callback) => {
    if (options.onBuildEnd.length) {
      console.log("Executing post-build scripts");
      options.onBuildEnd.forEach(script => exec(script, puts));
    }
    callback();
  });
};

module.exports = WebpackShellPlugin;
