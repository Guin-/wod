var path = require("path")
var webpack = require("webpack")
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
//  context: __dirname,

  // app import chain starts here
  entry: './frontend/src/app/app',

  // location of written bundled files
  output: {
    path: path.resolve('./src/bundles/'),
    filename: '[name]-[hash].js',
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    //new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.jsx']
  },
}
