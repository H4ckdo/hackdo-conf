module.exports = function(next,req,res) {
	const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	let idCandidate = req.params.id;
	let body = req.body || {};
	let validName = body.name && isName.test(body.name);
	let validStartDate = body.startDate && isDate.test(body.startDate);
	let validEndingDate = body.endingDate && isDate.test(body.endingDate);
	let validDescription = body.descrition && isDescription.test(body.descrition);
	let validVenue = body.venue && isVenue.test(body.venue);
	let validAssistant = body.assistant && isUUID.test(body.assistant);

	if(utils.not(validName) || utils.not(validStartDate) || utils.not(validEndingDate) || utils.not(validDescription) || utils.not(validVenue) || utils.not(validAssistant)) {
		res.status(400).send({ message:"bad request",code:0})
	} else if(isUUID.test(idCandidate)) {
		next();
	} else {
		res.status(400).send({ message:"bad request",code:0})
	}
}//end exports
