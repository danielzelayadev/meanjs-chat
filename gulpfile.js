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
path.public = {};

let dev = "dev/";

path.dev.app = dev + "app/";
path.dev.app.components = path.dev.app + "components/";
path.dev.app.services = path.dev.app + "services/";
path.dev.app.shared = path.dev.app + "shared/";

path.dev.assets = dev + "assets/";
path.dev.assets.fonts = path.dev.assets + "fonts/";
path.dev.assets.img = path.dev.assets + "img/";
path.dev.assets.vendor = path.dev.assets + "vendor/";

let public = "public/";

path.public.css = public + "css/";
path.public.fonts = public + "fonts/";
path.public.img = public + "img/";
path.public.js = public + "js/";
path.public.vendor = public + "vendor/";
path.public.views = public + "views/";