module.exports = {
  attributes: {
  	id:{
  		defaultsTo:uuid.v4(),
  		type: 'string',
  		primaryKey:true
  	},
    name : { type: 'string' },
    email : { type: 'string' },
    interests : { type: 'string' },
    events:{
    	collection: 'event',
      via: 'assistant'
    }
  }//end attributes
}//end exports
