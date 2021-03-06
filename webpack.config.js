/* global __dirname */

var path = require('path');

module.exports = {
  // define global variables
  // file loaders
  rules: [
    // {
    //   test: /(\.json)$/,
    //   loader: 'file-loader?name=js/[name].[ext]'
    // },
    {
      test: /(\.jpg|\.jpeg|\.png|\.eot|\.ttf|\.svg|\.woff|\.woff2)$/,
      loader: 'file-loader?name=shinobi-fonts/[name]-[sha1:hash].[ext]'
    },
    {
      test: /\.scss$/,
      use:[
        {
          loader: 'style-loader'
        },
         {
            loader: 'css-loader'
          },
           {
            loader: 'fast-sass-loader',
            options:{
              outputStyle: 'expanded',
              includePaths:[path.resolve(__dirname, './src/styles')]
            }
          }

      ]
    },
    {
      test: /\.html$/,
      exclude: /(node_modules|vendor)/,
      loader: 'html-loader'
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader?cacheDirectory=true',
        query: {
          presets: ['env'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread'
          ]
        }

    }
  ],
  // resolve modules
  modules: ['app', 'node_modules', 'src']
};
