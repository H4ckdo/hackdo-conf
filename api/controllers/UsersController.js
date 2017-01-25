module.exports = {
  profile: function(req, res) {
    res.view("profile");
  },
  add: function(req, res) {
    res.view("user_add");
  },
  list: function(req, res) {
    res.view("user_list");
  },
  serveUpdate: function(req, res) {
    res.view("user_update");
  },
  showAll: function(req, res) {
    let query = _.pick(req.query || {}, ['rol', 'name']);
  	let responseCases = {
  		success: {
        omit: ["password", "rol", "isLogin"]
  		}
  	};
		res.dispatchModel(User.find(query).populateAll(), responseCases);
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
  	let responseCases = {
  		success: {
  			omit: ["password"]
  		},
   		errors: {
   			notFound: {
					details: `The user '${id}' was not found, please check the id parameter`
				}
   		}
   	}//end responseCases
   	res.dispatchModel(User.findOne({id}), responseCases);
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
  	let responseCases = {
  		success: {
  			status: 201,
  			omit: ['password', 'isLogin']
      },
      errors: {
        badRequest: {
          details: 'Missing requeriments'
        },
        forbidden: {
          details: 'Some arguments are not allowed'
        }
      }
    }//end responseCases
    res.dispatchModel(utils.model.createSure(req.body, User), responseCases);
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
    let responseCases = {
      success: {
        omit: ["password"]
      }
    };
		res.dispatchModel(User.updateSure(id, update, session), responseCases);
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
        status: 202,
        notFound: {
          details: `Resource ${id} not found`
        },
        pick: [
          "id"
        ]
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

