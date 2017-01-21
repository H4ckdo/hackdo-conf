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
process.env.DEV = true;
let fixtures;
if(process.env.STAGING || process.env.DEV) {
  fixtures = {
      order: ['User', 'Event'],
      User: [
        {
          name: 'esneyder',
          email: 'esnene02@gmail.com',
          password: '123456',
          rol: 'superadmin'
        }
      ],
      Event: [
        {
          name: "Hackdo",
          startAt: "2017/01/03",
          endAt: "2017/03/03",
          eventType: "presential",
          location: "Quibdo Calle 24 18-128"
        }
      ]
    };
};

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
     host: 'localhost',
     port: 27017,
     database: 'hackdo' //optional
   }
  },
	hookTimeout: 120000
};
