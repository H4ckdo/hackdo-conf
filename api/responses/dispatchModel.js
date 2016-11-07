module.exports = function dispatchModel(Query,options = {}, model_empty) {
  let req = this.req;
  let res = this.res;
  let yeild = {};
  options.errors = options.errors || {};
  options.success = options.success || {};

  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;//full url

	return (
		Query.then(function(docs) {
			if(model_empty && _.isArray(docs)) {
				if(docs.length === 0) docs = null;
			}

			if(docs) {
				res.status(options.success.status || 200);
				delete options.success.status;
				_.extend(yeild,options.success || {},{
					data : {attributes : docs},
					links : {self : fullUrl}
				});
			} else {
				if(options.errors.notFound) {
					if(utils.not(options.errors.notFound.id)) options.errors.notFound.id = "MISSING_RESOURCE";
				} else {
					options.errors.notFound = {};
				}

				res.status(404);
				_.extend(yeild,{
					data:null,
					errors : [_.extend({
						status : 404,
						title : 'Resource not found',
					},options.errors.notFound )]
				},{
					links : {self : fullUrl}
				});
			}

  		res.json(yeild);
  	})
  	.catch(function(err) {
  		let status = 500;
	 		let title = "Internal Server Error";
			options.errors.fails = {};
  		if(err.invalidAttributes 	|| err.message === "invalidAttributes") {
  			let forbidden = options.errors.Forbidden;
  			title = forbidden ? forbidden.title : "Forbidden";
  			status = 403;
	 			options.errors.fails.id = (forbidden ? forbidden.id : "INVALID_PARAMS");
	 			options.errors.fails.detail = (forbidden ? forbidden.detail : "Some argument or arguments are not valid");
  		}

  		if(err.message === "All_ATTRIBUTES_INVALID") {
	 			let badRequest = options.errors.badRequest;
		 		status = 400;
		 		title = (badRequest ? badRequest.title : "Bad request");
	  		options.errors.fails.id = (badRequest ? badRequest.id : "MISSING_REQUERIMENTS");
				options.errors.fails.detail = (badRequest ? badRequest.detail : "Client error, wrong request.");
			}

	 		if(err.code === 11000 || (err.originalError && err.originalError.code === 11000)) {
	 			let conflict = options.errors.Conflict;
	 			status = 409;
 			  title = (conflict ? conflict.title : "Conflict");
 			  options.errors.fails.id = (conflict ? conflict.id : "RESOURCE_CONFLICT");
 			  options.errors.fails.detail = (conflict ? conflict.detail : "Resources in conflict.");
	 		}

			res.status(status);
			_.extend(yeild,{
				errors : [_.extend({
					status,
					title
				},( status === 500 ? (options.errors.serverError || {
					id : "SERVER_ERROR",
					detail : "An internal error has occurrent."
				}) : options.errors.fails || {}))]
			});

			res.json(yeild);
  	})
  )
}//end dispatch model
