module.exports.routes = {
	"GET /route/list":function(req,res) {
		routesList(res);
	},

	"GET /" : {view : "homepage"},

	//CRUD events
	"GET /api/v1/events":"EventsController.showAll",

	"GET /api/v1/events/:id":"EventsController.show",

	"POST /api/v1/events/create":"EventsController.create",

	"PUT /api/v1/events/update/:id":"EventsController.update",

	"DELETE /api/v1/events/delete/:id":"EventsController.delete",
	//END CRUD events


	//CRUD users
	"GET /api/v1/users":"UsersController.showAll",

	"GET /api/v1/users/:id":"UsersController.show",

	"POST /api/v1/users/create":"UsersController.create",

	"PUT /api/v1/users/update/:id":"UsersController.update",

	"DELETE /api/v1/users/delete/:id":"UsersController.delete"
	//END CRUD users

}
