module.exports = {
  showAll: function (req, res) {

  	res.dispatchModel(Event.find({}),{ });
  },//end show method
  show: function (req, res) {
  	let id = req.params.id;
   	res.dispatchModel(Event.findOne({id}),{
  		success:{},//end success
   		errors:{
   			notFound:{
   				id:'MISSING_EVENT',
					detail:`The event '${id}' was not found, please check the id parameter`
				},//not found
				serverError:{
					id:'SERVER_ERROR',
					detail:`An internal error has occurrent.`
				}
   		}//end errors
   	});
  },//endshow method
  create: function (req, res) {
  	let body = req.body;
    res.dispatchModel(Event.create(body));
  },//end create method
  update: function (req, res) {
  	let id = req.params.id;
  	let update = req.body;
  	res.dispatchModel(Event.update({id},update));
  },//end update method
  delete: function (req, res) {
  	let id = req.params.id;
  	res.dispatchModel(Event.destroy({id}));
  }//end delete method
}
