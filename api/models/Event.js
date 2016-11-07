module.exports = _.extend({
		autoPK : false,
	  attributes : {
	 		id : {
	      type: 'string',
	      primaryKey: true
	    },
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
		}//end attributes

}, utils.model)//end exports
