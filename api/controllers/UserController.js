module.exports = {
	showAll: function (req, res) {
		let whatEvent = req.query.event;
		if(whatEvent && whatEvent === 'true') return res.dispatchModel(User.find({}).populate("events"));
		return res.dispatchModel(User.find({}))
  },
  show: function (req, res) {
  	let id = req.params.id;
		res.dispatchModel(User.findOne({id}));
  },
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },
  create: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  }
};

