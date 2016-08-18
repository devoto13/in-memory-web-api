module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [{pattern: 'in-memory-web-api/*.spec.js', watched: false}],

    preprocessors: {'in-memory-web-api/*.spec.js': ['webpack']},

    reporters: ['mocha'],

    browsers: ['Chrome'],

    singleRun: true,

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    }
  });
};
