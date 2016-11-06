module.exports = {
	// autoPK : false,
	attributes : {
	 	// id : {
  	// 	type : 'string',
  	// 	primaryKey : true
  	// },
		name : {
			type : 'string'
		},
		email : {
			type : 'string'
		},
		event : {
      collection : 'event',
      via : 'manager'
    }
	}
}
