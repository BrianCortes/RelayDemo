var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: "./app/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module:{
  	loaders:[
  		{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
  	]
  },
  devServer: {
    contentBase: "./public",
    inline: true,
		port: 8080
	},
};