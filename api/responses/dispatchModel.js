module.exports = function dispatchModel(Query,options = {}, model_empty) {
  let req = this.req;
  let res = this.res;
  let yield = {};
  options.errors = options.errors || {};
  options.success = options.success || {};

	return (
		Query.then(function(docs) {
      if(model_empty && _.isArray(docs)) {
        if(docs.length === 0) docs = null;
      }

      if(docs) {
				res.status(options.success.status || 200);
				delete options.success.status;
				let relationships = options.relationships;
				_.extend(yield, options.success || {},{data : docs});

				if(options.success.omit) {
					if(_.isArray(yield.data)) {
						utils.remove(options.success.omit.fileds, yield.data, options.success.omit.unless);
					} else {
						_.each(options.success.omit, (to_omit)=> delete yield['data'][to_omit]);
					}
					delete yield.omit;
				}//id omit when success


				if(options.success.single && utils.not(_.isArray(docs))) {
					yield.data = yield.data[0];
					delete yield.single;
				}//if pick first document


				if(options.success.authentication) {
					req.session.userId = yield.data.id;
					req.session.authenticated = true;
					return (
            req.session.save(function(err) {
  						if(err) {
  							res.status(500).json(_.extend({
  								id : "SERVER_ERROR",
  								title: "Internal Server Error",
  								detail : "An internal error has occurrent."
  							}, options.errors.serverError || {}));
  						} else {
                if(!options.success.conserve) {
                  delete yield.data.id;
                  delete yield.authentication;
                }
                if(options.success.view) {
                  res.view(options.success.view, yield.data);
                } else {
                  delete yield.conserve;
                  res.json(yield);
                }
              }
					  })
          )
				}//is authentication
        if(!options.success.conserve) {
  				delete yield.data.id;
  				delete yield.authentication;
        }

        if(options.success.view) {
          res.view(options.success.view, yield.data);
        } else {
          delete yield.conserve;
					res.json(yield);
				}
			} else {
				if(options.errors.notFound) {
					if(utils.not(options.errors.notFound.id)) options.errors.notFound.id = "MISSING_RESOURCE";
				} else {
					options.errors.notFound = {};
				}
				res.status(404);
				if(options.success.authentication) {
					_.extend(yield,{
						error : _.extend({
							id : "NOT_FOUND",
							detail : "Resource not found"
						}, options.errors.notFound || {})
					});
				} else {
					_.extend(yield,{
						data : null,
						error : _.extend({
							id : "NOT_FOUND",
							detail : "Resource not found"
						}, options.errors.notFound || {})
					});
				}
				if(options.errors.notFound.view) {
					res.view(options.errors.notFound.view, yield.data);
				} else{
          res.json(yield);
				}
			}
  	})
  	.catch(function(err) {
      console.log('err ',err);
  		let status = 500;
	 		let title = "Internal Server Error";
			options.errors.fails = {};
  		if(err.invalidAttributes 	|| err.message === "invalidAttributes" || err.message === "WRONG_PASSWORD" || err.message === "ALREADY_LOGOUT" || err.message("Forbidden")) {
  			let forbidden = options.errors.Forbidden;
  			title = forbidden ? forbidden.title : "Forbidden";
	 			options.errors.fails.id = (forbidden ? forbidden.id : "INVALID_PARAMS");
  			status = 403;
  			if(err.message === "WRONG_PASSWORD") {
		 			options.errors.fails.detail = (forbidden ? forbidden.detail : "email or password wrong");
  			} else if(err.message === "ALREADY_LOGOUT"){
		 			options.errors.fails.detail = (forbidden ? forbidden.detail : "already logout");
  			} else {
		 			options.errors.fails.detail = (forbidden ? forbidden.detail : "Some argument or arguments are not valid");
  			}

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
			_.extend(yield,{
				error : _.extend({
					status,
					title
				},( status === 500 ? (options.errors.serverError || {
					id : "SERVER_ERROR",
					detail : "An internal error has occurrent."
				}) : options.errors.fails || {}))
			});

			if(options.errors.notFound && options.errors.notFound.view) return res.view(options.errors.notFound.view, yield.data);
			if(options.errors.serverError && options.errors.serverError.view) return res.view(options.errors.serverError.view, yield.data);
			if(options.errors.forbidden && options.errors.forbidden.view) return res.view(options.errors.forbidden.view, yield.data);

      res.json(yield);
  	})
  )
}//end dispatch model
