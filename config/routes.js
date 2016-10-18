module.exports.routes = {
	"GET /route/list":function(req,res) {
		routesList(res);
	},

	"GET /":{view:"homepage"},

	//CRUD events
	"GET /api/v1/events":"EventController.showAll",

	"POST /api/v1/event/create":"EventController.create",

	"PUT /api/v1/event/update":"EventController.update",

	"GET /api/v1/event/show/:id":"EventController.show",//note the :id url must be at the bottom of the routes to dont confuse

	"DELETE /api/v1/event/delete/:id":"EventController.delete",
	//END CRUD events

//CRUD user
	"GET /api/v1/users":"UserController.showAll",

	"POST /api/v1/user/create":"UserController.create",

	"PUT /api/v1/user/update":"UserController.update",

	"GET /api/v1/user/show/:id":"UserController.show",//note the :id url must be at the bottom of the routes to dont confuse

	"DELETE /api/v1/user/delete/:id":"UserController.delete"
	//END CRUD user

}
