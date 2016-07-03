import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import WebpackDevServer from 'webpack-dev-server';
import HtmlTemplate from './htmltemplate';
var path = require('path');
var util = require('util');

gulp.task('default', ['webpack']);

gulp.task('babel', () => {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('target'));
});

gulp.task('test', ['babel'], () => {
  return gulp.src('test/*.js')
    .pipe(mocha())
    .on('error', () => {
      gulp.emit('end');
    });
});

gulp.task('htmljs', (callback) => {
    let ht = new HtmlTemplate();
    ht.recursiveHtmlToJs(path.resolve(process.cwd(), './src'), callback);
});

gulp.task('watch', () => {
    gulp.watch(['src/**', '!src/*.tpl.js', 'public/**'], ['webpack']);
});

gulp.task('webpack', ['babel', 'htmljs'], function(callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
  ];

  // run webpack
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      progress: true
    }));
    callback();
  });
});

gulp.task('server', ['webpack'], function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = 'eval';
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: '/' + myConfig.output.publicPath,
		stats: {
			colors: true
		},
		hot: true
	}).listen(8080, 'localhost', function(err) {
		if(err) throw new gutil.PluginError('webpack-dev-server', err);
		gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
	});
});
