/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Express middleware to use for every Sails request. To add custom          *
  * middleware to the mix, add a function to the middleware config object and *
  * add its key to the "order" array. The $custom key is reserved for         *
  * backwards-compatibility with Sails v0.9.x apps that use the               *
  * `customMiddleware` config option.                                         *
  *                                                                           *
  ****************************************************************************/

  middleware: {

  /***************************************************************************
  *                                                                          *
  * The order in which middleware should be run for HTTP request. (the Sails *
  * router is invoked by the "router" middleware below.)                     *
  *                                                                          *
  ***************************************************************************/

    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      'bodyParser',
    	'fileStream',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'poweredBy',
//      'contentType',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ],
    contentType:function(req,res,next) {
    	let requestType = req.get('content-type');
   		let accept = req.headers.accept;
    	let url = req.url;
    	let methos = req.method;
    	const isforAPI = /^(\/api\/)/gi;//match with /api/ routes
    	if(isforAPI.test(url)) {
   			res.setHeader('Content-Type', 'application/vnd.api+json');//setting content-type
				delete res.charset;//removing charset because json use unicode
				if(method === "GET" || method === "DELETE") return next();

	    	if(requestType === "application/vnd.api+json") {
	    		console.log(accept,'accept');
	    		if(accept === "application/vnd.api+json") {
		    		next();
	    		} else {
	    			res.statusCode = 406;
						res.write(JSON.stringify({message:"406 Not Acceptable"}))
						return res.end();
	    		}//end accept
	    	} else {
    			res.statusCode = 415;
					res.write(JSON.stringify({message:"415 Unsupported Media Type"}));
					return res.end();
	    	}//end requestType
    	} else {
    		next();
    	}//end isforAPI
    },
  /****************************************************************************
  *                                                                           *
  * Example custom middleware; logs each request to the console.              *
  *                                                                           *
  ****************************************************************************/

    // myRequestLogger: function (req, res, next) {
    //     console.log("Requested :: ", req.method, req.url);
    //     return next();
    // }


  /***************************************************************************
  *                                                                          *
  * The body parser that will handle incoming multipart HTTP requests. By    *
  * default as of v0.10, Sails uses                                          *
  * [skipper](http://github.com/balderdashy/skipper). See                    *
  * http://www.senchalabs.org/connect/multipart.html for other options.      *
  *                                                                          *
  * Note that Sails uses an internal instance of Skipper by default; to      *
  * override it and specify more options, make sure to "npm install skipper" *
  * in your project first.  You can also specify a different body parser or  *
  * a custom function with req, res and next parameters (just like any other *
  * middleware function).                                                    *
  *                                                                          *
  ***************************************************************************/

    bodyParser: require('skipper')({strict: true})
  },

  /***************************************************************************
  *                                                                          *
  * The number of seconds to cache flat files on disk being served by        *
  * Express static middleware (by default, these files are in `.tmp/public`) *
  *                                                                          *
  * The HTTP static cache is only active in a 'production' environment,      *
  * since that's the only time Express will cache flat-files.                *
  *                                                                          *
  ***************************************************************************/

  // cache: 31557600000
};
