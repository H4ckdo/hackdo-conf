module.exports = function dispatchModel(query) {
  let req = this.req;
  let res = this.res;
	return (
		query.then(function(docs) {
			if(!docs || ( _.isArray(docs) && _.isEmpty(docs) )) {
	  		return res.status(404).json({
	  			message:"not found",
	  			code:0
	  		})
			}
  		res.json({
  			message:"success",
  			data:docs,
  			code:1
  		})
  	})
  	.catch(function(err) {
  		res.status(500).json({
  			message:"error",
  			error:err,
  			code:0
  		})
  	})
  )
}//end dispatch model
