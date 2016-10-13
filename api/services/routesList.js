module.exports = function route_list(res) {
	let routes = Object.keys(sails.config.routes);
	res.send(`
			<h1>Route List</h1>
			<ol>
				${
					routes.map(function(route,index,entire) {
						let route_splited = route.split(" ");
						let url = route_splited[1] || "";
						return (`
							<li>
								<a href="${url.replace(':id','idFake')}"> ${route} </a>
							</li>
						`)
					}).join()
				}
			</ol>
	`);
}
