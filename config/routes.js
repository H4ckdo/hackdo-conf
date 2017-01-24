module.exports.routes = {
  /*
    Serve views
  */

  "GET /": "HomepageController.show",

  "GET /event/add": "EventsController.addEvent",

  "GET /event/dashboard": "EventsController.dashboardEvent",

  "GET /event/edit": "EventsController.editEvent",




  /*
    API ROUTES
  */

  /*
    Relationshipt events and users
  */
  "POST /api/v1/events/:eid/add/user/:id": "EventsController.add",

  "DELETE /api/v1/events/:eid/remove/user/:id": "EventsController.remove",

  /*
    CRUD Event
  */
  "GET /api/v1/events": "EventsController.showAll",

  "GET /api/v1/events/:id": "EventsController.show",

  "POST /api/v1/events/create": "EventsController.create",

  "PUT /api/v1/events/update/:id": "EventsController.update",

  "DELETE /api/v1/events/delete/:id": "EventsController.delete",
  /*
    CRUD Users
  */
  "GET /api/v1/users": "UsersController.showAll",

  "GET /api/v1/users/:id": "UsersController.show",

  "POST /api/v1/users/create": "UsersController.create",

  "PUT /api/v1/users/update/:id": "UsersController.update",

  "DELETE /api/v1/users/delete/:id": "UsersController.delete",

  /*
    Auth
  */
  "POST /api/v1/auth/login": "LoginController.login",

  "PUT /api/v1/auth/logout": "LoginController.logout"
}
