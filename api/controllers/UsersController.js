module.exports = {
  showAll: function(req, res) {
  	let response_cases = {
  		success: {
        conserve: true,
        omit: {
          fileds: ["password"]
        },
  		}
  	}
		res.dispatchModel(User.find({}), response_cases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Find all users and response by dispatchModel custom method of @res,
                  and also the omit the password attribute from the query,`
      Return<undefined>
    */
  },//end showAll

  show: function(req, res) {
  	let id = req.params.id;
  	let response_cases = {
  		success: {
  			omit: ["password"]
  		},
   		errors: {
   			notFound: {
   				id: "MISSING_USER",
					detail: `The user '${id}' was not found, please check the id parameter`
				}
   		}
   	}//end response_cases
   	res.dispatchModel(User.findOne({id}), response_cases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Find one user and response by dispatchModel custom method of @res,
                    and also the omit the password attribute from the query,
                    in case of not found response and custom Object`
      Return<undefined>
    */
  },//end show

  create: function(req, res) {
  	let response_cases = {
  		success: {
  			status: 201,
  			omit: ['password', 'isLogin'],
        conserve: true
  		}
    }//end response_cases
    res.dispatchModel(User.createSure(req.body), response_cases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Find all users and response by dispatchModel custom method of @res`
      Return<undefined>
    */
  },//end create

  update: function (req, res) {
  	let id = req.params.id;
  	let update = req.body;
    let session = req.session;
		res.dispatchModel(User.updateSure(id, update, session));
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Update a document, in case of not found response and custom Object`
      Return<undefined>
    */
  },//end update

  delete: function(req, res) {
  	let id = req.params.id;
  	let responseCases = {
      success: {
        omit: {
          fileds: [
            "name",
            "password",
            "rol",
            "email",
            "isLogin",
            "createdAt",
            "updatedAt"
          ]
        }
      }
    };
  	res.dispatchModel(User.destroy({id}), responseCases);
     /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Destroy a document, in case of not found response and custom Object`
      Return<undefined>
    */
  }//end delete
};

