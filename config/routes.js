module.exports.routes = {
  "GET /": "HomepageController.show",

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
