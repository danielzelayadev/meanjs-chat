'use strict';

let gulp     = require('gulp'),
	babel    = require('gulp-babel'),
	clean    = require('gulp-clean'),
	concat   = require('gulp-concat'),
	copy     = require('gulp-copy'),
	csscomb  = require('gulp-csscomb'),
	csso     = require('gulp-csso'),
	htmlhint = require('gulp-htmlhint'),
	htmlmin  = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	server   = require('gulp-live-server'),
	sass     = require('gulp-sass'),
	debug    = require('gulp-strip-debug'),
	uglify   = require('gulp-uglify'),
	uncss    = require('gulp-uncss'),
	utl      = require('gulp-util');