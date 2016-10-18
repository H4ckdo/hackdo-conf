module.exports = {
  attributes: {
  	id:{
  		defaultsTo:uuid.v4(),
  		type: 'string',
  		primaryKey:true
  	},
  	type:{
  		type:'string',
  		defaultsTo:"events"
  	},
    attributes : {
    	type: 'json',
    	defaultsTo:{
	    	title:{type:'string'},
		    startDate : { type: 'date',defaultsTo:new Date(),required:false },
		    endingDate : { type: 'date'}
		    description : { type: 'string' },
		    venue : { type: 'string' },
    	}
    }

  //  maxAssistant : { type: 'integer'},
  //  assistant:{
  //  	model:"user"
  //  }
  }//end attributes
}//end exports
