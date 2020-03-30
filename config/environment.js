'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'covid-azores',
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    backendless: {
      appID: '',
      apiKey: ''
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.backendless.appID = 'CC14A0FB-3B83-4EB5-FF2F-0BF3ED5CFA00';
    ENV.backendless.apiKey = '88C8394F-8051-44D3-8C79-507FCFA6AECD';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV.backendless.appID = 'backendlessAppID';
    ENV.backendless.apiKey = 'backendlessAPIKey';
  }

  if (environment === 'production') {
    ENV.rootURL = '/covid-azores/';
    // here you can enable a production-specific feature
    ENV.backendless.appID = 'CC14A0FB-3B83-4EB5-FF2F-0BF3ED5CFA00';
    ENV.backendless.apiKey = '88C8394F-8051-44D3-8C79-507FCFA6AECD';
  }

  return ENV;
};
