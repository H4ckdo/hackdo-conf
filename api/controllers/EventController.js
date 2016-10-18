module.exports = {
  showAll: function (req, res) {
 		let self = req.protocol + '://' + req.get('host') + req.originalUrl;//full url
  	res.dispatchModel(Event.find({}),{ links:{self} });
  },//end show method
  show: function (req, res) {
  	let id = req.params.id;
   	res.dispatchModel(Event.findOne({id}));
  },//end show method
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