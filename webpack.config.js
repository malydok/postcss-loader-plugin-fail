const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

module.exports = {
  entry: './index.js',
  output: {
    filename: 'scripts.js'
  },
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/
    }],
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      })
    }]
  },
  plugins: [
    extractSass
  ]
};