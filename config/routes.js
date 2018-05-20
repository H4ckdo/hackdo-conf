const path = require('path');
const routes = require(path.resolve(__dirname,'./anchors/routes.json'))

function requireControllers(app) {
  let controllers = _.keys(routes);
  for(controller of controllers) {
    let Ctrl = require(`../controllers/${controller}/index.js`);
    let newController = new Ctrl();
    let methods = _.keys(routes[controller]);
    for(method of methods) {
      let configs = routes[controller][method];
      for (config of configs) {
        let route = app.route(config.route);
        let handler = newController[config.handler];
        if(method === "GET") route.get(handler);
        if(method === "POST") route.post(handler);
        if(method === "PUT") route.put(handler);
        if(method === "DELETE") route.delete(handler);
      }
    }
  }
}

module.exports = (app) => {
  return surePromise(
    prometify(requireControllers.bind(requireControllers, app))
  )
}
