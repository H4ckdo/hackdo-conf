module.exports.routes = {
	"GET /route/list":function(req,res) {
		routesList(res);
	},

	"GET /":{view:"homepage"},

	//CRUD events
	"GET /api/events":"EventController.showAll",

	"POST /api/event/create":"EventController.create",

	"PUT /api/event/update":"EventController.update",

	"GET /api/event/show/:id":"EventController.show",//note the :id url must be at the bottom of the routes to dont confuse

	"DELETE /api/event/delete/:id":"EventController.delete"
	//END CRUD events
}
