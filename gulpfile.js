var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

gulp.task('browserify-test', function() {
	return gulp.src('test/app.js')
	.pipe(browserify({
		insertGlobals: true,
		debug: true
	}))
	.pipe(rename('test.js'))
	.pipe(gulp.dest('build'))
	.pipe(livereload())
});

gulp.task('watch', ['browserify-test'], function() {
	livereload.listen();
	gulp.watch(['src/**/*.js', 'test/**/*.js'], ['browserify-test']);
});

gulp.task('default', ['watch']);