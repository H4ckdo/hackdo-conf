module.exports = {
	not : function(element) {
		return !(!!element)
	},
	is_date : function(candidate) {
		return (new Date(candidate) === "Invalid Date" ? false : true);
	},
	subtract : function(obj,conserve) {
		let yeild = {};

		_.forEach(conserve,(element)=> { if(obj[element]) yeild[element] = obj[element] });
		return yeild;
	}
}
