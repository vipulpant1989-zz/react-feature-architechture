'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const webPackConfig = () => {

  const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].min.css",
    disable: process.env.NODE_ENV === "development"
  });

  var config = {
    devtool: 'eval-source-map',
    entry: {
      main : path.join(__dirname, 'src/app.js'),
    },
    output: {
      path: path.join(__dirname, 'dist/'),
      filename: '[name].[hash].js',
      publicPath: '/'
    },
    plugins: [
      extractSass,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new HtmlWebpackPlugin({
        filename: path.join(__dirname,'dist/index.html'),
        template: path.join(__dirname, 'src/template/index.ejs'),
        title : 'Feature architecture'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.API_URI': JSON.stringify("http://ndb-pos.dev.nextdayblinds.com")//Change this according to api uri
      }),
      new webpack.LoaderOptionsPlugin({
          "__DEVTOOLS__": true,
          debug: true,
          cache: false
      })
    ],
    module: {
      loaders: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: [/node_modules\/(?!react-social-icons)/],
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
            use: ["css-loader", "sass-loader", "resolve-url-loader"],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./dist/assets/svg/[name].[ext]',
      },
      {
        test: /\.(jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',

      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader'],
          publicPath: '/'
        }),
      }
      ]
    }
  };

  return config;
}

module.exports = webPackConfig;

