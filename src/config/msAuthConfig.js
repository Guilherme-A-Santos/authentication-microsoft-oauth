const msAuthLibrary = require('@azure/msal-node');

module.exports = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: `${process.env.CLOUD_INSTANCE}/${process.env.TENANT_ID}`,
    clientSecret: process.env.ClIENT_SECRET
  },
  system: {
      loggerOptions: {
          loggerCallback(loglevel, message, containsPii) {
              console.log(message);
          },
          piiLoggingEnabled: false,
          logLevel: msAuthLibrary.LogLevel.Verbose,
      }
  }
};

