"use strict";
const gulp = require('gulp');
const	babel = require("gulp-babel");
const	watch = require("gulp-watch");
const	fs = require("fs");
const	browserify = require('gulp-browserify');
const $ = require('gulp-load-plugins')();
const stringify = require('stringify');


let sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];


gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('data',()=> console.log('Compiling sass'))
    .on('error', $.sass.logError))
    .on('error',function(err) {
      if(process.env.NODE_ENV) return process.exit(1);
    })
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('build/styles'))
    .on("end",()=> console.log("Sass done \n"));
})//end sass

gulp.task("js",function() {
	return gulp.src("src/js/**/*.js", { read: false })
    .pipe(browserify({
      transform: ['babelify'],
      insertGlobals : false,
      debug : false,
      minify:false
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
		.on("data",(chuck)=> console.log("Compiling js..."))
    .on('error',function(err) {
      if(process.env.NODE_ENV) return process.exit(1);
    })
		.pipe(gulp.dest('build/js'))
		.on("end",()=> console.log("Done js \n"));
})//end js task


gulp.task("watch",function() {
	watch(['src/scss/**/*.scss'],()=> { this.tasks['sass']['fn']() });
	watch(['src/js/**/*.js'],()=> this.tasks['js']['fn']());
  watch(['views/components/*.hbs'],()=> this.tasks['es6']['fn']());
})

gulp.task('default',["watch"],function function_name(argument) {
	console.log("start task")
});
