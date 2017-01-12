module.exports = function(req, res, next) {
	const isDate = utils.isDate;
	const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
	const	isTitle = /^\S[a-z0-9ñÑ]{3,}/g;
	const isPassword = /^\S[a-z0-9ñÑ]{6,20}/g;
	const	isDescription = /^[a-z0-9ñÑ_ -]{3,500}/g;
	const isEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	let body = req.body || {};
	let isValid = false;

	if(body.title) isValid = isTitle.test(body.title);
	if(body.name) isValid = isTitle.test(body.name);
	if(body.email) isValid = isEmail.test(body.email);
	if(body.description) isValid = isDescription.test(body.description);
	if(body.password) isValid = isPassword.test(body.password);
	if(req.params.id) isValid = checkForHexRegExp.test(req.params.id);
  next();
}//end exports
