module.exports = function(req,res,next) {
	const isDate = utils.is_date;
	const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
	const	isTitle = /^\S[a-z0-9ñÑ]{3,}/g;
	const	isDescription = /^[a-z0-9ñÑ_ -]{3,500}/g;
	const	isVenue = /^\s*\S+(?:\s+\S+){2}/;
	let body = req.body || {};
	let isValid = false;

	if(body.title) isValid = isTitle.test(body.title);
	if(body.startDate) isValid = isDate(body.startDate);
	if(body.endingDate) isValid = isDate(body.endingDate);
	if(body.descrition) isValid = isDescription.test(body.descrition);
	if(body.venue) isValid = isVenue.test(body.venue);
	if(req.params.id) isValid = checkForHexRegExp.test(req.params.id);
	if(isValid) return next();

	res.status(403).send({
		errors : [{
			title : `Forbidden`,
		 	detail : `Some argument or arguments are not valid`,
		 	status : 403
		}]
	});
}//end exports
