'use strict';

var FOUR_MINUTES = 4 * 60 * 1000;
var TEN_SECONDS = 10 * 1000;

var browsers = ['Chrome'];

module.exports = function(config) {
  config.set({
    files: [
      'node_modules/intl/dist/Intl.complete.js',  // Intl polyfill
      'test/**/*.js'
    ],
    preprocessors: {
      'test/**/*.js': [ 'webpack' ]
    },

    webpack: {
      module: {
        loaders: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }],
        postLoaders: [{
          loader: 'transform?brfs'
        }],
        noParse: [
          /node_modules\/sinon\//
        ]
      },
      externals: {
        'cheerio': 'window',
        'jsdom': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      resolve: {
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    browsers: browsers,
    frameworks: [ 'mocha', 'chai', 'dirty-chai', 'sinon', 'sinon-chai'],
    reporters: ['spec'],
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-chai',
      'karma-dirty-chai',
      'karma-sinon',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-browserstack-launcher',
      'karma-spec-reporter'
    ],
    singleRun: false,
    autoWatch: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    concurrency: 5,
    client: {
      captureConsole: true,
      timeout: 10000,
      mocha: {
        noHighlighting: true  // Fix intermittent mocha bug
      }
    },
    startConnect: true,
    connectOptions: {
      verbose: false,
      verboseDebugging: false
    },
    browserDisconnectTimeout: TEN_SECONDS, // default 2000
    browserDisconnectTolerance: 1, // default 0
    browserNoActivityTimeout: FOUR_MINUTES, //default 10000
    captureTimeout: FOUR_MINUTES //default 60000
  });
};
