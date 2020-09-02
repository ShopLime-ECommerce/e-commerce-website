const LiveReloadPlugin = require('webpack-livereload-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	entry: './client/index.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'env', 'es2015'], // if you aren't using 'babel-preset-env', then omit the 'env'
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	plugins: isDev ? [new LiveReloadPlugin({ appendScriptTag: true })] : [],
}
