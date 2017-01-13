"use strict";
module.exports = function sessionAuth(req, res, next) {
	let authenticated = req.session.authenticated;
  if(authenticated) {
  	next();
  } else {
  	return res.notAllow();
  }
}//end sessionAuth
