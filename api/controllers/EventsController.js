module.exports = {
  remove: function(req, res) {
    let id = req.params.id;
    let eid = req.params.eid;
    let responseCases = {
      errors: {
        notFound: {
          details: `Event ${id} not found`
        },
        otherwise:  {
          userNotFound: {
            status: 404,
            details: `User ${id} not found`
          }
        }
      }
    };
    res.dispatchModel(Event.removeSpeaker({id, eid}), responseCases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Find all users and response by dispatchModel custom method of @res,
                  and also the omit the password attribute from the query,`
      Return<undefined>
    */
  },//end remove

  add: function(req, res) {
    let id = req.params.id;
    let eid = req.params.eid;
    let responseCases = {
      errors: {
        notFound: {
          details: `Event ${id} not found`
        },
        otherwise:  {
          userNotFound: {
            status: 404,
            details: `User ${id} not found`
          }
        }
      }
    };
    res.dispatchModel(Event.addSpeaker({id, eid}), responseCases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Find all users and response by dispatchModel custom method of @res,
                  and also the omit the password attribute from the query,`
      Return<undefined>
    */
  },//end add

  showAll: function(req, res) {
    let query = _.pick(req.query || {}, ['name', 'location']);
    let responseCases = {
      success: {
        notFound: {
          details: `Event not found`
        }
      }
    }
    res.dispatchModel(Event.find(query).populateAll(), responseCases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Find all events and response by dispatchModel custom method of @res,
                  and also the omit the password attribute from the query,`
      Return<undefined>
    */
  },//end showAll

  show: function(req, res) {
    let id = req.params.id;
    let responseCases = {
      success: {
        omit: []
      },
      errors: {
        notFound: {
          details: `The event '${id}' was not found, please check the id parameter`
        }
      }
    }//end responseCases
    res.dispatchModel(Event.findOne({id}), responseCases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Find one event and response by dispatchModel custom method of @res,
                    and also the omit the password attribute from the query,
                    in case of not found response and custom Object`
      Return<undefined>
    */
  },//end show

  create: function(req, res) {
    let responseCases = {
      success: {
        status: 201
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
    res.dispatchModel(utils.model.createSure(req.body, Event), responseCases);
    /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Create a event and response by dispatchModel custom method of @res`
      Return<undefined>
    */
  },//end create

  update: function (req, res) {
    let id = req.params.id;
    let update = req.body;
    let session = req.session;
    let responseCases = {
      success: {
        omit: []
      }
    };
    res.dispatchModel(Event.updateSure(id, update, session), responseCases);
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
        pick: ["id"]
      }
    };
    res.dispatchModel(Event.destroy({id}), responseCases);
     /*
      @params
        *req<Object>: Represent and http request object from nodejs
        *res<Object>: Represent and http response object from nodejs
      Description: `Destroy a document, in case of not found response and custom Object`
      Return<undefined>
    */
  },//end delete

   addEvent: function(req, res) {
    res.view("addEvent");
  },//end addEvent

  editEvent: function(req, res) {
    res.view("editEvent");
  },//end editEvent

  dashboardEvent: function(req, res) {
    res.view("dashboardEvent");
  }//end dashboard
};

