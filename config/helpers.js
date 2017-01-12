let Handlebars = require("handlebars");

Handlebars.registerHelper('isEqual', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('exist', function(v1, options) {
  if(v1) return options.fn(this);
  return options.inverse(this);
});

module.exports = Handlebars.helpers;
