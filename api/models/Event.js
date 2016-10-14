module.exports = {
  attributes: {
  	id:{
  		defaultsTo:uuid.v4(),
  		type: 'string',
  		primaryKey:true
  	},
    name : { type: 'string' },
    startDate : { type: 'date',defaultsTo:new Date(),required:false },
    endingDate : { type: 'date',required:false },
    description : { type: 'string' },
    venue : { type: 'string' },
//    maxAssistant : { type: 'number',required:false },
    assistant:{
    	model:"user"
    }
  }//end attributes
}//end exports
