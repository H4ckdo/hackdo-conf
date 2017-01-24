/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 */
const fixtures = require("../fixtures.js").resolve(process.env.STAGING);
module.exports = {
  fixtures,
  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  log: {
    level: "verbose"
  },
  models:{
    connection: "MongodbServer",
	  migrate: "drop"
  },
  connections :{
    MongodbServer: {
      adapter: 'sails-mongo',
      url: process.env.MONGO_URI_STAGING
     }
  },
	hookTimeout: 120000
};
