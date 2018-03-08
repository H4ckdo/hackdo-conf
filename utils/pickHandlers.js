module.exports = (routes, self, controllerName) => {
  //self.methods = {};
  let controllers = _.keys(routes);
  let index = _.findIndex(controllers, item => item === controllerName)
  let controller;
  //debugger
  if(typeof controllers[index] === 'undefined') {
    let error = new Error('controller not found'); 
    error.description = `${controllers} is not undefined`;
    throw error; 
  } else {
    controller = routes[controllers[index]];
  } 
  let methods = _.keys(controller);
  _.each(methods, (method) => {
    _.each(controller[method], config => {
      if(typeof self.prototype[config.handler] === 'undefined') {
        self.prototype[config.handler] = require(`../build/controllers/${controllerName}/${config.handler}.js`);
      }
    })
    
  })
  //debugger;
  return self;
}