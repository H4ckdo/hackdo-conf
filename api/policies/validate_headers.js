module.exports = function validateContentType(req,res,next) {
	let ContentType = req.get("content-type");
	let Accept = req.get("accept");
	if(ContentType === "application/vnd.api+json" && Accept === "application/vnd.api+json") {
		//headers allowed for create data
		next();
	} else {
		//headers not allowed for create data
		if(ContentType !== "application/vnd.api+json") {
			// if wrong content type
			res.status(415);
			let wrongContentType = {
				errors:[{
					status : 415,
					title : 'Unsupported Media Type',
					detail : `${ContentType ? ContentType + ' Content-Type not allowed.' : 'Content-Type not specified.'}`
				}]
			};
			return res.json(wrongContentType);
		}//end if wrong content type

		if(Accept !== "application/vnd.api+json") {
			// if wrongAccept
			res.status(406);
			let wrongAccept = {
				errors : [{
					status : 406,
					title : 'Not Acceptable',
					detail : `${Accept ? Accept + ' Accept not allowed.' :  'Accept not specified.'}`
				}]
			};

			return res.json(wrongAccept);
		}//end if wrong accept
	}
}//end validateContentType
