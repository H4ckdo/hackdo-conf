"use strict";
const gulp = require('gulp-param')(require('gulp'), process.argv)
,			babel = require("gulp-babel")
,			watch = require("gulp-watch")
,			fs = require("fs")
,			mkdirp = require('mkdirp')
,			clc = require('cli-color')
,			error = clc.red.bold
,			warn = clc.yellow
,			notice = clc.blue
,			done = clc.green
,			browserify = require('gulp-browserify')
, 		$ = require('gulp-load-plugins')();


let sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
]

gulp.task('sass', function() {
  return gulp.src('src/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('data',()=> console.log('Compiling sass'))
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('build/styles'))
    .on("end",()=> console.log("Sass done \n"));
})//end sass

gulp.task("es6",function() {
	return gulp.src("src/js/**/*.js")
		.pipe(browserify({
			insertGlobals : false,
     	debug : false
    }))
		.pipe(babel({
			presets: ['es2015']
		}))
		.on("data",(chuck)=> console.log(done("Compiling js...")))
		.pipe(gulp.dest('build/js'))
		.on("end",()=> console.log(done("Done js \n")));
})//end es6 task

gulp.task("watch",function() {
	watch(['src/scss/**/*.scss'],()=> { this.tasks['sass']['fn']() });
	watch(['src/js/**/*.js'],()=> this.tasks['es6']['fn']());
})

gulp.task('default',["watch"],function function_name(argument) {
	console.log("task done ")
});
