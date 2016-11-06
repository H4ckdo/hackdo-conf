let ObjectId = require('mongodb').ObjectID;

module.exports = {
	// autoPK : false,
  attributes : {
  	// id : {
  	// 	type : 'string',
  	// 	primaryKey : true
  	// },
  	title : {
  		type : 'string',
  		required : true,
  		unique : true
  	},
    startDate : {
    	type : 'date',
    	required : true
    },
    endingDate : {
    	type : 'date',
    	required : true
  	},
    description : {
    	type : 'string'
    },
    venue : {
    	type : 'string'
    },
    eventType : {
    	type : 'string',
    	defaultsTo : "presential"
    },
    manager : {
    	model : 'user'
    }
  //  maxAssistant : { type: 'integer'},
  },//end attributes

  beforeValidate : function has_requeriments(data,next) {
		let attributes = Event.attributes;
		delete attributes.id;
		let requires = (Object.keys(attributes).filter((attribute)=> attributes[attribute]['required']));
  	let has_requeriments = requires.every((element)=> data[element]);
  	if(has_requeriments) {
  		Object.keys(data).forEach((self)=> { if(utils.not(attributes[self])) delete data[self] });
  		return next();
  	} else {
	  	return next({code : "missing_fields", detail : "invalid attributes attempting to be created in the Event model"});
  	}
  },//end beforeValidate

  clear_query : function clear_attributes(data) {
  	let attributes = Event.attributes;
  	delete attributes.id;
  	Object.keys(data).forEach((self)=> { if(utils.not(attributes[self])) delete data[self] });
 		return data;
  },//end clear_query

  findAndUpdate : function(query,update) {
  	let self = this;
  	update = self.clear_query(update);
  	return (new Promise(function(resolve,reject) {
		 		Event.native(function (err, collection) {
		 			if(err) return reject(err);
		 			let where = (query.id ? {_id : new ObjectId(query.id)} : query);
		  		collection.update( where ,{"$set":update}, { multi: true },(err)=> err ? reject(err) : resolve(update));
				});
			})// Promise callback
  	)
  },//end findAndUpdate

  remove : function destroy_resource(query) {
  	return (new Promise(function(resolve,reject) {
		 		Event.native(function (err, collection) {
		 			if(err) return reject(err);
		  		collection.remove({_id : new ObjectId(query.id)}, (err)=> err ? reject(err) : resolve(query));
				});
			})// Promise callback
  	)
  }
}//end exports
