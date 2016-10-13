module.exports.routes = {
	//CRUD events
	"GET /api/events":"EventController.showAll",

	"GET /api/event/:id":"EventController.show",

	"POST /api/event/create":"EventController.create",

	"PUT /api/event/update":"EventController.update",

	"DELETE /api/event/delete/:id":"EventController.delete"
	//END CRUD events
}
