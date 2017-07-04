/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'node-ember-forms',
    podModulePrefix: 'node-ember-forms/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['ember-do-forms'] = {
    errorsPath: 'validations.attrs.{PROPERTY_NAME}.errors',
    autoDataTestSelectors: false,

    defaultClasses: {
      form: [],
      field: ['nd-field'],
      label: ['nd-label'],
      control: ['nd-control'],
      feedback: ['nd-feedback'],
      hint: []
    },

    validationClasses: {
      fieldSuccess: [],
      fieldError: ['--nd-error'],
      controlSuccess: [],
      controlError: []
    }
  }

  return ENV;
};
