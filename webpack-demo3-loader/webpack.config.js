//webpack.config.js
module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'js/bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					"presets": ['latest']
				}
			}
		]
	}
}