module.exports = {
  showAll : function (req, res) {
  	let response_cases = {type:'events'}//end cases response
  	res.dispatchModel(Event.find({}),response_cases);
  },//end show method
  show: function (req, res) {
  	let id = req.params.id;
  	let response_cases = {
  		type : 'events',
   		errors : {
   			notFound : {
   				id : 'MISSING_EVENT',
					detail : `The Events '${id}' was not found, please check the id parameter`
				},//not found
				serverError : {
					id : 'SERVER_ERROR',
					detail : `An internal error has occurrent.`
				}//end case serverError
   		}//end case errors
   	}//end response_cases
   	res.dispatchModel(Event.findById(id),response_cases,true);;
  },//end show method

  create : function (req, res) {
  	let response_cases = {
  		success : {
  			status : 201
  		},
    	errors : {
    		serverError : {
					detail : `An error has occurred trying to create resource.`
    		}
    	}
    }//end response_cases
    res.dispatchModel(Event.create(req.body),response_cases);
  },//end create method

  update : function (req, res) {
  	let id = req.params.id;
  	let update = req.body;
  	let response_cases = {
  		type : 'events',
   		errors : {
   			Forbidden : {
					title : `Forbidden`,
				 	detail : `Some argument or arguments are not valid`
		 		},
   			notFound : {
   				id : 'MISSING_EVENT',
					detail : `The Events '${id}' was not found, please check the id parameter`
				},//not found
				serverError : {
					id : 'SERVER_ERROR',
					detail : `An internal error has occurrent.`
				}//end case serverError
   		}//end case errors
  	}//end response_cases

		res.dispatchModel(Event.findAndUpdate({id},update),response_cases);
		// res.dispatchModel(Event.findAndUpdate({id},update),response_cases);
  },//end update method

  delete : function (req, res) {
  	let id = req.params.id;
  	let response_cases = {
  		type : 'events',
   		errors : {
   			Forbidden : {
					title : `Forbidden`,
				 	detail : `Some argument or arguments are not valid`
		 		},
   			notFound : {
   				id : 'MISSING_EVENT',
					detail : `The Events '${id}' was not found, please check the id parameter`
				},//not found
				serverError : {
					id : 'SERVER_ERROR',
					detail : `An internal error has occurrent.`
				}//end case serverError
   		}//end case errors
  	}//end response_cases
  	res.dispatchModel(Event.remove({id}),response_cases);
  }//end delete method
}
