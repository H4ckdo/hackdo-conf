let ObjectId = require('mongodb').ObjectID;

module.exports = {
	not : function(element) {
		return !(!!element)
	},//end not

	is_date : function(candidate) {
		return (new Date(candidate) === "Invalid Date" ? false : true);
	},//end is_date

	subtract : function(obj,conserve) {
		let yeild = {};

		_.forEach(conserve,(element)=> { if(obj[element]) yeild[element] = obj[element] });
		return yeild;
	},//end subtract

	clear_query : function clear_attributes(model,data) {
  	let attributes = model.attributes;
  	delete attributes.id;
  	delete attributes._id;
  	Object.keys(data).forEach((self)=> { if(utils.not(attributes[self])) delete data[self] });
 		return data;
  },//end clear_query

  relationships : function(model) {
  	let attributes = model.attributes;
 		return (Object.keys(attributes)).filter((element,index)=> {
 				if(!!(attributes[element]['model'])) {
 					return element;
 				} else {
 					return false;
 				}
 		});
  },

  update_native : function(model, update,resolve ,reject) {
 		model.native(function (err, collection) {
 			if(err) return reject(err);
 			if(model_rel.length) {
 				model_rel.forEach((element)=> { if(update[element]) update[element] = new ObjectId(update[element]) });
 			}
  		collection.update({_id : new ObjectId(id)} ,{"$set":update}, { multi: true },(err)=> {
  			if(err) return reject(err);
  			if(model.after_update_by_id) {
					model.after_update_by_id(update,(err)=> { err ? reject(new Error(err.message)) : resolve(update) });
				} else {
					resolve(update);
				}
  		});
		});
  },

  model : {
  	update_by_id : function(id,update) {
  		let model = this;
  		update = utils.clear_query(model,update);
  		return (new Promise(function(resolve,reject) {
	  			if(Object.keys(update).length === 0) return reject(new Error("All_ATTRIBUTES_INVALID"));
			 		let model_rel = utils.relationships(model);
					if(model.before_update_by_id) {
						model.before_update_by_id(update,(err)=> {
							err ? reject(new Error(err.message)) : utils.update_native(model, update, resolve, reject)
						});
					} else {
						utils.update_native(model, update, resolve, reject);
					}
				})// Promise callback
  		)
  	}//end updateById
  }
}
