var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './src/app.js',
     output: {
      path: __dirname + '/build',
       filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                      presets: ['es2015', 'stage-0']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
