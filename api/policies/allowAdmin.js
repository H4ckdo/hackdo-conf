module.exports = function allowAdmin(req, res, next) {
  let session = req.session;
  let body = req.body;
  if(session.rol === "superadmin") {
    if(body.rol === "superadmin") return res.notAllow();
    return next();
  }

  if(session.rol === "admin" && (body.rol === "admin" || body.rol == "superadmin")) return res.notAllow();
  if(session.rol === "admin" && body.rol === "speaker") return next();//ok
  res.notAllow();
}//end allowAdmin

