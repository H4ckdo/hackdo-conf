"use strict";
module.exports = function(req, res, next) {
	next();
	// let isAuth = req.session.authenticated;
 //  if (isAuth) {
 //  	if(req.isSocket) return next();
	//   if(req.url === "/") return res.redirect("/home");
 //    return next();
 //  }

 //  // User is not allowed
 //  // (default res.forbidden() behavior can be overridden in `config/403.js`)
 //  if(req.url === "/") return next();
 //  res.redirect("/");
};
