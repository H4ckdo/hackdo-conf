let ObjectId = require('mongodb').ObjectID;

module.exports = {
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
    attributesRequired: function(Model = {}) {
      let attrs = Model._attributes;
      let keys = Object.keys(attrs);
      let requires = [];
      _.each(keys,(key)=> { if(attrs[key].hasOwnProperty('required')){ requires.push(key) } });
      return requires;
    },//end attributesRequired

    validateData: function(Model, update) {
      let attributes = Model._attributes;
      return _.every(Object.keys(update),(current)=> attributes.hasOwnProperty(current));
    },//end validateUpdate
  }//end model

}//end utils
