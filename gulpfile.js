"use strict";

var gulp = require("gulp");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var js_files = ["jquery.konamicommand.js"];

gulp.task("jshint", function() {
	gulp.src(js_files).
		pipe(jshint()).
		pipe(jshint.reporter("default"));
});

gulp.task("uglify", function() {
	gulp.src(js_files).
		pipe(
			uglify({
				outSourceMap: true
			})
		).
		pipe(rename({suffix: ".min"})).
		pipe(gulp.dest("."));
});

gulp.task("default", ["jshint", "uglify"]);
