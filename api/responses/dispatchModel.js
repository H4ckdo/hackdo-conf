module.exports = function dispatchModel(query,options) {
  let req = this.req;
  let res = this.res;
  res.set("Content-Type","application/vnd.api+json");
	return (
		query.then(function(docs) {
			if(!docs || ( _.isArray(docs) && _.isEmpty(docs) )) {
	  		return res.status(404).jsonApi({
	  			message:"not found",
	  			code:0
	  		})
			}
			options.data = docs;
  		res.jsonApi(options);
  	})
  	.catch(function(err) {
  		res.status(500).jsonApi({
  			message:"error",
  			error:err,
  			code:0
  		})
  	})
  )
}//end dispatch model
