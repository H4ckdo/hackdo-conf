module.exports = {
	not:function(element) {
		return !(!!element)
	},
	isDate:function(candidate) {
		return (new Date(candidate) === "Invalid Date" ? false : true);
	}
}
