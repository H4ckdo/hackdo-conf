module.exports = function jsonApi(data) {
  let req = this.req;
	let res = this.res;
	res.setHeader('Content-Type', 'application/vnd.api+json');
	delete res.charset;
	res.write(JSON.stringify(data))
	return res.end();
}//end exports
