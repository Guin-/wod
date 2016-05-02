var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';

// Karma configuration
// Generated on Fri Apr 29 2016 16:48:22 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js'
    ],


    preprocessors: {
      'tests.webpack.js' : ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,


    webpackMiddleware: {
      noInfo: true,
    },


    reporters: ['progress'],


    // web server port
    //port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    autoWatch: true,


    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
