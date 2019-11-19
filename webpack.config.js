var path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname),
		filename: 'main.js',
	},
	devServer: {
		contentBase: __dirname,
		compress: true,
	},
};
