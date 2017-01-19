module.exports = _.extend({
  autoPK: false,
  schema: true,
  updateSure: function(id = '', update = {}, session = {}) {
    return (new Promise((resolve, reject)=> {
        let isValid = utils.model.validateData(Event, update);
        if(isValid) {
          return Event.update(id, update).then((updated)=> {
           if(updated.length === 0) return reject(new Error("notFound"));
           resolve(update);
         }).catch(reject);
        } else {
          return reject(new Error("forbidden"));
        }
      })
    );
    /*
      @params
        *id<String>: mongodb id represent as a string
        *update<Object>: Represent the data to update
        *session<Object>: Represent the session object which store the session information
      Description: `Update a document restricting the update access for rol of the user via session.
                    Also clean the @update argument before do the query`
      Return<Promise>
    */
  },//end updateSure
  removeSpeaker: function(data) {
    return (new Promise((resolve, reject)=> {
        Event.findOne(data.eid)
          .then(function(docs) {
            if(!docs) return reject(new Error("notFound"));
            User.findOne({id: data.id}).then(function(user) {
              if(!user) return reject(new Error("userNotFound"));
              docs.speakers.remove(data.id);
              docs.save((err)=> err ? reject(new Error("serverError")) : resolve(docs));
            })
            .catch(reject);
          })
          .catch(reject);
      })
    )
  },
  addSpeaker: function(data) {
    return (new Promise((resolve, reject)=> {
        Event.findOne(data.eid)
          .then(function(docs) {
            if(!docs) return reject(new Error("notFound"));
            User.findOne({id: data.id}).then(function(user) {
              if(!user) return reject(new Error("userNotFound"));
              docs.speakers.add(data.id);
              docs.save((err)=> err ? reject(new Error("serverError")) : resolve(docs));
            })
            .catch(reject);
          })
          .catch(reject);
      })
    )
  },//end addSpeaker

  attributes: {
    id: {
      type: 'objectid',
      primaryKey: true
    },
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    startAt: {
      type: 'date',
      required: true
    },
    endAt: {
      type: 'date',
      required: true
    },
    eventType : {
      type: 'string',
      enum: ['presential', 'virtual'],
      required: true
    },
    location: {
      type: 'string'
    },
    speakers: {
      collection: 'user',
      via: 'events',
      dominant: true
    }
  }
}, utils.model);
