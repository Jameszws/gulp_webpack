var path = require("path");
var webpack = require('webpack');
var commonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//自定义发环境与发布环境配置
var definePlugin = new webpack.DefinePlugin({
    __NODE_ENV__:JSON.stringify(process.env.NODE_ENV)
});

//*
module.exports = {
	entry: {		
		index:["./src/js/index.js"],
		unioncenter:["./src/js/unioncenter.js","./src/js/unioncenter2.js"],
		//公共js文件合并
		common:["./src/common.js"]
	},
	output: {
		//指定文件输出路径
		path: path.resolve( __dirname, "build" ),
		filename: "[name].bundle.js",
		publicPath: "/assets/"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
    	]
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	definePlugin,
    	new commonsChunkPlugin({
    		name:"common",
    		chunks:["common"]
    	})
    ]
};
//*/