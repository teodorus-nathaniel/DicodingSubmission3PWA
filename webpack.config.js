var path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js',
	},
	devServer: {
		contentBase: __dirname,
		compress: true,
	},
};
