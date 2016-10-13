/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  // port: 80,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/
  session:{
  	adapter:"redis",
	  url: 'redis://pub-redis-16787.us-east-1-3.7.ec2.redislabs.com:16787',
  	port: 6379,
   	pass: "maxtermax04",
   	prefix: 'sess:'
  },
  log: {
    level: "verbose"
  },
  models:{
    connection: 'localDiskDb',
	  migrate: "safe"
  },

	hookTimeout: 120000
};
