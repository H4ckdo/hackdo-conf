module.exports.routes = {
	"GET /route/list":function(req,res) {
		routesList(res);
	},

	"GET /" : {view : "homepage"},

	//CRUD events
	"GET /api/v1/events":"EventController.showAll",

	"GET /api/v1/events/:id":"EventController.show",//note the :id url must be at the bottom of the routes to dont confuse

	"POST /api/v1/events/create":"EventController.create",

	"PUT /api/v1/events/update/:id":"EventController.update",

	"DELETE /api/v1/events/delete/:id":"EventController.delete",
	//END CRUD events
}
