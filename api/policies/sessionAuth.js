"use strict";
module.exports = function(req, res, next) {
	let isAuth = req.session.authenticated;
  if(isAuth) {
  	next();
  } else {
  	if(req.url === "/api/v1/users/create" || req.url === "/api/v1/auth/logout" || req.url === "/api/v1/auth/login") return next()
  	return res.redirect("/login");
  }
}
