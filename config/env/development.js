/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
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
  connection:{
    MongodbServer: {
      adapter: 'sails-mongo',
      url: "mongodb://hackdo_website_staging:maxtermax02@ds127439.mlab.com:27439/hackdo_website_staging"
    }
  },
	hookTimeout: 120000
};
