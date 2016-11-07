module.exports = function(req,res,next) {
	const isDate = utils.is_date;
	const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
	const	isTitle = /^\S[a-z0-9ñÑ]{3,}/g;
	const	isDescription = /^[a-z0-9ñÑ_ -]{3,500}/g;
	const	isVenue = /^\s*\S+(?:\s+\S+){2}/;
	const isEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	let body = req.body || {};
	let isValid = false;

	if(body.title) isValid = isTitle.test(body.title);
	if(body.name) isValid = isTitle.test(body.name);
	if(body.email) isValid = isEmail.test(body.email);
	if(body.startDate) isValid = isDate(body.startDate);
	if(body.endingDate) isValid = isDate(body.endingDate);
	if(body.descrition) isValid = isDescription.test(body.descrition);
	if(body.venue) isValid = isVenue.test(body.venue);
	if(body.manager) isValid = checkForHexRegExp.test(req.body.manager);

	if(req.params.id) isValid = checkForHexRegExp.test(req.params.id);
	if(isValid) return next();

	res.status(400).send({
		errors : [{
			title : "Bad request",
		 	detail : "Some argument or arguments are not valid",
		 	status : 400
		}]
	});
}//end exports
