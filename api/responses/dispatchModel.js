module.exports = function dispatchModel(query,options) {
  let req = this.req;
  let res = this.res;
  res.set("Content-Type","application/vnd.api+json");
  let yeild = {};
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;//full url
	return (
		query.then(function(docs) {
			if(docs) {
				res.status(200);
				_.extend(yeild,options.success,{
					data:docs,
					links:{ self:fullUrl }
				});
			} else {
				res.status(404);
				_.extend(yeild,{
					data:null,
					errors:[_.extend({
						status:404,
						title:'Resource not found',
					},options.errors.notFound)]
				},{
					links:{ self:fullUrl }
				});
			}
  		res.jsonApi(yeild);
  	})
  	.catch(function(err) {
  		console.log(err,'err');
			res.status(500);
			_.extend(yeild,{
				data:null,
				errors:[_.extend({
					status:500,
					title:'The server not responding',
				},options.errors.serverError)]
			});


  	})
  )
}//end dispatch model
