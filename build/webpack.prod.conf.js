var pkg = require('../package.json')
var app = require('..' + pkg.appRoot + 'package.json')

var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default
var AppCachePlugin = require('appcache-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var env = config.build.env

// Update app-framework version in demo app package.json
var isThere = require('is-there')
if (!isThere('../../package.json')) {
  var saveJSON = require('jsonfile')
  saveJSON.spaces = 2  
  var demoApp = require('../demo-app/package.json')
  demoApp.devDependencies['app-framework'] = '^' + pkg.version
  saveJSON.writeFileSync('./demo-app/package.json', demoApp)
}

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('[id].[chunkhash].js')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin('[name].[contenthash].css'),    
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '..' + pkg.appRoot, app.faviconIcon),
      background: app.faviconBackgroundColor,
      title: app.title,
      prefix: 'img/icons-[hash:7]/',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      },
      persistentCache: true,
      emitStats: false
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.ejs',
      title: app.title,
      manifest: ' manifest="manifest.appcache"',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),    
    new ImageminPlugin({
      svgo: null
    }),
    new AppCachePlugin({
      cache: null,
      network: ['*'],
      fallback: null,
      settings: null,
      exclude: [/\.(js|css)\.map$/],
      output: 'manifest.appcache'
    })
    
    /*,
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '..' + pkg.projectRoot + 'node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })*/
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig