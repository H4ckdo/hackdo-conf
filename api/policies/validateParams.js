module.exports = function validateParams(req, res, next) {
	const isDate = utils.isDate;
	const isObjectId = new RegExp("^[0-9a-fA-F]{24}$");
	const	isTitle = /^\S[a-z0-9ñÑ]{3,}/g;
	const isPassword = /^\S[a-z0-9ñÑ]{5,20}/g;
	const	isDescription = /^[a-z0-9ñÑ_ -]{3,500}/g;
	const isEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	let body = req.body || {};
	let isValid = false;

	if(body.title) isValid = isTitle.test(body.title);
	if(body.name) isValid = isTitle.test(body.name);
	if(body.email) isValid = isEmail.test(body.email);
	if(body.description) isValid = isDescription.test(body.description);
	if(body.password) isValid = isPassword.test(body.password);
	if(req.params.id) isValid = isObjectId.test(req.params.id);
  if(req.params.eid) isValid = isObjectId.test(req.params.eid);

  if(isValid) return next();
  if(Object.keys(body).length === 0) {
    //body empty
    res.badRequest({
      error: {
        details: "Body empty, need some payload"
      },
      status: 400
    });
  } else {
    res.forbidden({
      error: {
        details: "Some arguments are not valid"
      },
      status: 403
    });
  };


}//end validateParams
