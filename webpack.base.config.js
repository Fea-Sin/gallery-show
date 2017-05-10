const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		main: './src/main',
		vendors: './src/vendors'
	},
	output: {
		path: path.join(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						less: ExtractTextPlugin.extract({
							use: ['css-loader?minimize', 'autoprefixer-loader?{browsers:["last 200 version"]}', 'less-loader'],
							fallback: 'vue-style-loader'
						}),
						css: ExtractTextPlugin.extract({
							use: ['css-loader', 'autoprefixer-loader?{browsers:["last 200 version"]}', 'less-loader'],
							fallback: 'vue-style-loader'					
						})
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader?minimize', 'autoprefixer-loader?{browsers:["last 200 version"]}'],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader','autoprefixer-loader?{browsers:["last 200 version"]}', 'less-loader'],
					fallback: 'style-loader'
				}) 
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=1024'
			},
			{
				test: /\.(html|tpl)$/,
				loader: 'html-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'$': 'jquery/dist/jquery.min.js',
			'vue': 'vue/dist/vue.esm.js'
		}
	}
}