var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var mainBowerFiles = require('main-bower-files');
var minify = require('gulp-minify');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

/* Javascript */
gulp.task('js', ['jshint'], function() {
	return gulp.src('./app/js/**/*.js')
		.pipe(concat('dist.js'))
		.pipe(minify())
		.pipe(gulp.dest('./app/dist'));
});

gulp.task('jshint', function() {
	return gulp.src('./app/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'))
		.on('error', notify.onError({ message: 'JSHint failed'}));
});

gulp.task('js:watch', function() {
	gulp.watch('./app/js/**/*.js', ['inject-js']);
});

gulp.task('inject-js', ['js'], function() {
	return gulp.src('./app/index.html')
		.pipe(inject(gulp.src('./app/dist/dist.js', {read: false}), {relative: true}))
		.pipe(gulp.dest('./app'));
});

/* SASS/CSS */
gulp.task('sass', function() {
	return gulp.src('./app/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/dist'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./app/sass/**/*.scss', ['inject-css']);
});

gulp.task('inject-css', ['sass'], function() {
	return gulp.src('./app/index.html')
		.pipe(inject(gulp.src('./app/dist/styles.css', {read: false}), {relative: true}))
		.pipe(gulp.dest('./app'));
});

/* Bower */
gulp.task('bower-install', function() {
	return bower();
});

gulp.task('bower', ['bower-install'], function() {
	return gulp.src(mainBowerFiles())
		.pipe(concat('bower-components.js'))
		.pipe(minify())
		.pipe(gulp.dest('./app/dist'));
});

gulp.task('bower:watch', function() {
	gulp.watch('./bower.json', ['inject-bower']);
});

gulp.task('inject-bower', ['bower'], function() {
	return gulp.src('./app/index.html')
		.pipe(inject(gulp.src('./app/dist/bower-components.js', {read: false}), {relative: true, name: 'bower'}))
		.pipe(gulp.dest('./app'));
});

/* Gulp  */
gulp.task('default', ['inject-bower', 'inject-css', 'inject-js']);

gulp.task('serve', ['bower:watch', 'js:watch', 'sass:watch'], function() {
	return gulp.src('./app')
		.pipe(server({
			livereload: true,
			open: true
		}));
});

gulp.task('build', ['default'], function() {
	gulp.src('./app/**/*')
		.pipe(gulp.dest('./build'));
});
