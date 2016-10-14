module.exports = function dispatchModel(query) {
  let req = this.req;
  let res = this.res;
	return (
		query.then(function(docs) {
  		res.json({
  			message:"success",
  			data:docs,
  			code:1
  		})
  	})
  	.catch(function(err) {
  		res.json({
  			message:"error",
  			error:err,
  			code:0
  		})
  	})
  )
}//end dispatch model
