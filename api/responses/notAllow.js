module.exports = function notAllow(data = {}) {
  let req = this.req;
  let res = this.res;
  res.status = 405;
  res.json(_.extend({
    error: {
      details: "This action are not allow"
    }
  }, data));
}//end notAllow
