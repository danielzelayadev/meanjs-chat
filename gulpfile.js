'use strict';

let gulp       = require('gulp'),
	babel      = require('gulp-babel'),
	clean      = require('gulp-clean'),
	concat     = require('gulp-concat'),
	copy       = require('gulp-copy'),
	csscomb    = require('gulp-csscomb'),
	csso       = require('gulp-csso'),
	htmlhint   = require('gulp-htmlhint'),
	htmlmin    = require('gulp-htmlmin'),
	imagemin   = require('gulp-imagemin'),
	server     = require('gulp-develop-server'),
	livereload = require('gulp-livereload'),
	sass       = require('gulp-sass'),
	debug      = require('gulp-strip-debug'),
	uglify     = require('gulp-uglify'),
	uncss      = require('gulp-uncss'),
	util        = require('gulp-util');

let path = {};

path.dev = {};
path.dev.app = {};
path.dev.assets = {};
path.public = {};
path.server = [ 'bin/www', 'app.js', 'routes/**/*.js' ];
path.views = "views/";

let app = "dev/app/";
path.dev.app.root = app;
path.dev.app.components = app + "components/";
path.dev.app.services = app + "services/";
path.dev.app.shared = app + "shared/";

let assets = "dev/assets/";
path.dev.assets.root = assets;
path.dev.assets.fonts = assets + "fonts/";
path.dev.assets.img = assets + "img/";
path.dev.assets.vendor = assets + "vendor/";

let pbl = "public/";

path.public.css = pbl + "css/";
path.public.fonts = pbl + "fonts/";
path.public.img = pbl + "img/";
path.public.js = pbl + "js/";
path.public.vendor = pbl + "vendor/";
path.public.views = pbl + "views/";

// DEVELOP SERVER TASKS

gulp.task ( 'server:start', () => {
	server.listen( { path: 'bin/www' } );
} );

gulp.task ( 'server:restart', server.restart );

gulp.task ('reload-serverviews', () => {
	return gulp.src( path.views + '**/*.ejs' )
		.pipe( livereload() );
} );

gulp.task ( 'watch', () => {
	livereload.listen();

	gulp.watch ( path.views + '**/*.ejs', [ 'reload-serverviews' ] );

	gulp.watch ( path.server, [ 'server:restart' ] );
} );

gulp.task ( 'default', [ 'server:start', 'watch' ] );