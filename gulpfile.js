// 引入 gulp
var gulp = require('gulp');
var gulpOpen = require('gulp-open');
var os = require('os');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

var host = {    
    port: 8866    
};


//mac chrome: "Google chrome", 
var browser = os.platform() === 'linux' ? 'Google chrome' : (
  os.platform() === 'darwin' ? 'Google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

//启动webpack-dev-server
gulp.task('webpack-dev-server', function() {	
	console.log('正在启动webpack-dev-server');	
	for(var key in webpackConfig.entry){
		webpackConfig.entry[key].unshift("webpack-dev-server/client?http://localhost:"+host.port);
		webpackConfig.entry[key].unshift("webpack/hot/dev-server");	
	}
	var compiler = webpack(webpackConfig);
	var server = new webpackDevServer(compiler, {
	    hot: true,
	    //historyApiFallback: false,
	    // noInfo: true,
	    stats: { 
	        colors: true  // 用颜色标识
	    },
	    //contentBase:"./dist",
	    //contentBase:"./",
	});
	server.listen(host.port);
});


gulp.task('open', function (done) {
    gulp.src('')
        .pipe(gulpOpen({
            app: browser,
            uri: 'http://localhost:'+host.port+'/src/html'
        }))
        .on('end', done);
});
