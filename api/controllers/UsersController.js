module.exports = {
  showAll : function (req, res) {
  	let response_cases = {type:'users'}//end cases response
  	res.dispatchModel(User.find({}).populate("events"),response_cases);
  },//end show method

  show: function (req, res) {
  	let id = req.params.id;
  	let response_cases = {
  		type : "users",
   		errors : {
   			notFound : {
   				id : "MISSING_USER",
					detail : `The user '${id}' was not found, please check the id parameter`
				},//not found
				serverError : {
					id : "SERVER_ERROR",
					detail : "An internal error has occurrent."
				}//end case serverError
   		}//end case errors
   	}//end response_cases
   	res.dispatchModel(User.find({select : {id}}, {select: ["name","email","events"]}).populate("events"),response_cases,true);;
  },//end show method

  create : function (req, res) {
  	let response_cases = {
  		success : {
  			status : 201
  		},
    	errors : {
    		serverError : {
					detail : "An error has occurred trying to create resource."
    		}
    	}
    }//end response_cases
    res.dispatchModel(User.create(req.body),response_cases);
  },//end create method

  update : function (req, res) {
  	let id = req.params.id;
  	let update = req.body;
  	let response_cases = {
  		type : "users",
   		errors : {
   			Forbidden : {
					title : "Forbidden",
				 	detail : "Some argument or arguments are not valid"
		 		},
   			notFound : {
   				id : "MISSING_USER",
					detail : `The Events '${id}' was not found, please check the id parameter`
				},//not found
				serverError : {id : "SERVER_ERROR",
					detail : "An internal error has occurrent."
				}//end case serverError
   		}//end case errors
   	}//end response_cases
		res.dispatchModel(User.update_by_id(id, update),response_cases);
  },//end update method

  delete : function (req, res) {
  	let id = req.params.id;
  	let response_cases = {
  		type : 'users',
   		errors : {
   			Forbidden : {
					title : `Forbidden`,
				 	detail : `Some argument or arguments are not valid`
		 		},
   			notFound : {
   				id : 'MISSING_USER',
					detail : `The user '${id}' was not found, please check the id parameter`
				},//not found
				serverError : {
					id : 'SERVER_ERROR',
					detail : `An internal error has occurrent.`
				}//end case serverError
   		}//end case errors
  	}//end response_cases
  	res.dispatchModel(User.destroy({select : {id}}),response_cases);
  }//end delete method
};

