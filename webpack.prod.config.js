// Initialization
const webpack = require('webpack');

// File ops
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Folder ops
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// PostCSS support
const postcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

// Constants
const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');
const STYLE = path.join(__dirname, 'app/style.css');
const PUBLIC = path.join(__dirname, 'app/public');
const TEMPLATE = path.join(__dirname, 'app/templates/index.html');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const PACKAGE = Object.keys(
  require('./package.json').dependencies
);
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = {
	// Paths and extensions
	entry: {
    app: APP,
    style: STYLE,
    vendor: PACKAGE
  },
  output: {
    path: BUILD,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        include: [APP, NODE_MODULES]
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: [APP, NODE_MODULES]
      }
    ]
  },
  // Configure PostCSS plugins
  postcss: function processPostcss(webpack) { // eslint-disable-line no-shadow
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] })
    ];
  },
  // Source maps used for debugging information
  devtool: 'eval-source-map',
  // webpack-dev-server configuration
  devServer: {
    historyApiFallback: true,
    hot: true,
    progress: true,

    stats: 'errors-only',

    host: HOST,
    port: PORT,

    // CopyWebpackPlugin: This is required for webpack-dev-server.
    // The path should be an absolute path to your build destination
    outputPath: BUILD
  },

  plugins: [
    // Required to inject NODE_ENV within React app.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production') // esline-disable-line quote-props
      }
    }),
    // Clean Build Directory
    new CleanPlugin([BUILD]),
    new CopyWebpackPlugin([
      { from: PUBLIC, to: BUILD }
    ],
      {
        ignore: [
          // Doesn't copy Mac storage system files
          '.DS_Store'
        ]
      }
    ),
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      // JS palced at the bottom of the body element
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    // Extract CSS to a separate file
    new ExtractTextPlugin('[name].[chunkhash].css'),

    // Separate vendor and manifest files
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),

    // Minify Javascript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

























