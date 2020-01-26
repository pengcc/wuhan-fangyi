const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      },]
    },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: "css-loader",
      //     }]
      // }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'WuhanFangyi',
      inject: false,
      template: require('html-webpack-template'),
      bodyHtmlSnippet: '<main class="main" id="app"></main>'
    })
  ]
})
