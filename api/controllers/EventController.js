module.exports = {
  showAll: function (req, res) {
  	res.dispatchModel(Event.find({}));
  },//end show method
  show: function (req, res) {
  	let id = req.params.id;
   	res.dispatchModel(Event.findOne({id}));
  },//end show method
  create: function (req, res) {
  	let body = req.body;
    res.dispatchModel(Event.create(body))

  },//end create method
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },//end update method
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }//end delete method
}
