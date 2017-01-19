let ObjectId = require('mongodb').ObjectID;

module.exports = {
  clearUpdate: function(update = {}, deletes = []) {
    _.each(deletes,(del)=> delete update[del]);
    return update;
    /*
      @params
        *update<Object>: Represent the data to clear
        *deletes<Array>: List of string that represent the attributes of @update to delete
      Description: `Delete the attributes which is not as a proterty in the @update argument`
      Return<Object>
    */
  },//end clearUpdate

  pickUpMethods: function(ClassName) {
    let prototype = ClassName.prototype;
    let methods = Object.getOwnPropertyNames(prototype);
    _.pull(methods, 'constructor');
    return _.pick(prototype, methods);
    /*
      @params
        *ClassName: <class>
      Description: Pick up all the methods of a class
      Return<Object>: With the methods of the class
    */
  },
	not: function(element) {
		return !(!!element);
    /*
      @params
        *element: <any>
      Description: Check the boolean value
      Return<boolean>: Negated value of the boolean value from @element parameter
    */
	},//end not

	isDate: function(candidate) {
		return (new Date(candidate) === "Invalid Date" ? false : true);
    /*
      @params
        *candidate: <any>
      Description: Check the @candidate parameter is a valid javascript date
      Return<boolean>: Value that mean is the @candidate parameter id a valid javascript date
    */
	},//end isDate

	subtract: function(obj, conserve) {
		let yield = {};
		_.forEach(conserve, (element)=> { if(obj[element]) yield[element] = obj[element] });
		return yield;
    /*
      @params
        *obj: <Object>
        *conserve: <Array>
      Description: `Iterate the conserve array and check if the @obj params have the current element as key,
              the add it to a yield object.`
      Return<Object>: Result of the object that whant to conserve.
    */
	},//end subtract

	remove: function(omits = [], elements, unless = []) {
		for(var i = 0; i < elements.length; i++) {
			let current = elements[i];
			let deep = Object.keys(current);
			for(var e = 0; e < deep.length; e++) {
				let stop = false;
				for (var l = 0; l < unless.length; l++) {
					if(unless[l] === deep[e]) {
						stop = true;
						break
					}
				}
				if(stop) continue;
				let x = current[deep[e]];
				if(_.isArray(x)) {
					utils.remove(omits, x, unless);
				} else {
					for(var t = 0; t < omits.length; t++) {
						delete current[omits[t]]
					}
				}
			}
		}
    /*
      @params
        *omits<default Array>: Represent an array of object that whant to remove
        *elements<Array>: Represent an array of object over gonna be keys deleted in case that key was in the omits argument
        unless<Array>: Represent an array of object which have specifics
      Description: `Recursive function that delete the elements of a object even if is deep in the object`
      Return<undefined>
    */
	},//end remove

  model: {
    types: {
      objectid: function(value) {
        let valid = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(value);
        if(valid) return new ObjectId(value);
        return false;
        /*
          @params
            *value<String>: Represent a candidate mongo id
          Description: `Valid is a string is a valid mongo id`
          Return<Boolean>
        */
      }
    },
    createSure: function(data = {}, Model = {}) {
      return (new Promise((resolve, reject)=> {
          let requiresAttr = utils.model.attributesRequired(Model);
          let hasRequires = _.every(requiresAttr, (required)=> data.hasOwnProperty(required));
          if(hasRequires) {
            let isValid = utils.model.validateData(Model, data);
            if(isValid) {
             return Model.create(data).then(resolve).catch(reject);
            } else {
              return reject(new Error("forbidden"));
            }
          } else {
            return reject(new Error("badRequest"));
          }
        })
      )
      /*
        @params
          *data<Object>: Represent the data to create
          *Model<Object>: Represent and waterline model
        Description: `Create a document restricting to the attributes of the model
                      in case the @data argument was invalid reject the promise`
        Return<Promise>
      */
    },//end createSure
    attributesRequired: function(Model = {}) {
      let attrs = Model._attributes;
      let keys = Object.keys(attrs);
      let requires = [];
      _.each(keys,(key)=> { if(attrs[key].hasOwnProperty('required')){ requires.push(key) } });
      return requires;
    /*
      @params
        *Model<Object>: Represent a waterline model passed as argument
       Description: `Pick all the attributes required from a model into and array and return it`
      Return<Array>
    */
    },//end attributesRequired

    validateData: function(Model = {}, data = {}) {
      let attributes = Model._attributes;
      return _.every(Object.keys(data), (current)=> attributes.hasOwnProperty(current));
    /*
      @params
        *Model<Object>: Represent a waterline model passed as argument
        *data<Object>: Represent a object which have the data that want to know if they are in the attributes of the model
       Description: `Verify if @data have more attributes that allow by the model`
      Return<Boolean>
    */
    },//end validateUpdate
  }//end model

}//end utils
