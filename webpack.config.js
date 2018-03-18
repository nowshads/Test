module.exports = {
	entry:"./Source/index.js",

	output:{
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},

	devServer: {
		inline: true,
	    contentBase: './',
	    historyApiFallback: true,
	    port: 5050
	},

	module: {
	    loaders: [{
	    	test: /\.js$/,		
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: 
			{
				presets: ["react"]
	      	}
	    }]
	},

};