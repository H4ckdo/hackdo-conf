const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
,			isName = /^\S[a-z0-9ñÑ]{3,}/g
,			isDescription = /^[a-z0-9ñÑ_ -]{3,500}/g
,			isVenue = /^\s*\S+(?:\s+\S+){2}/;

let isDate = utils.isDate;
let not = utils.not;

module.exports = function(req,res,next) {
	let idCandidate = req.params.id;
	let body = req.body || {};
	let validName = body.name && isName.test(body.name);
	let validStartDate = body.startDate && isDate(body.startDate);
	let validEndingDate = body.endingDate && isDate(body.endingDate);
	let validDescription = body.descrition && isDescription.test(body.descrition);
	let validVenue = body.venue && isVenue.test(body.venue);
	let validAssistant = body.assistant && isUUID.test(body.assistant);

	if(not(validName) || not(validStartDate) || not(validEndingDate) || not(validDescription) || not(validVenue) || not(validAssistant)) {
		console.log("name",not(validName))
		console.log("validStartDate",not(validStartDate))
		console.log("validEndingDate",not(validEndingDate))
		console.log("validDescription",not(validDescription))
		console.log("validVenue",not(validVenue))
		console.log(not(validAssistant),'not(validAssistant)');

		res.status(400).send({ message:"bad request",code:0})
	} else if(isUUID.test(idCandidate)) {
		next();
	} else {
		console.log("mal id")
		res.status(400).send({ message:"bad request",code:0})
	}
}//end exports
