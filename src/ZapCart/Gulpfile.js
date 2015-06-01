/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');

// Modules for livereload
var refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729;

// Clean task
gulp.task('clean', function () {
    gulp.src('./wwwroot/views/', { read: false }) // much faster
        .pipe(rimraf({ force: true }));
});

// JSHint task
gulp.task('jshint', function () {
    gulp.src('./app/scripts/*.js')
        .pipe(jshint())
        // You can look into pretty reporters as well, but that's another story
        .pipe(jshint.reporter('default'));
});

// Browserify task
gulp.task('browserify', function () {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
    gulp.src(['./app/scripts/app.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        // Bundle to a single file
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('wwwroot/scripts'));
});

// Styles task
gulp.task('styles', function () {
    gulp.src('./app/styles/*.less')
        // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
        .pipe(less({ onError: function (e) { console.log(e); } }))
        // Optionally add autoprefixer
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        .pipe(gulp.dest('wwwroot/styles/'));

    // This is a hack
    gulp.src('./node_modules/angular-material/angular-material.css')
        .pipe(gulp.dest('wwwroot/styles/'));

    gulp.src('./app/styles/images/**/')
        .pipe(gulp.dest('wwwroot/styles/images/'));

    //gulp.src('./node_modules/material-design-icons/action/svg/production')
    //    .pipe(gulp.dest('wwwroot/styles/material-design/icons/'));

    // Any other view files from app/images
    gulp.src('./app/images/*.*')
        .pipe(gulp.dest('wwwroot/images/'));
});

// Views task
gulp.task('views', function () {
    // Get our index.html
    gulp.src('./app/index.html')
        .pipe(gulp.dest('wwwroot/'));

    gulp.src('./app/views/*.html')
        .pipe(gulp.dest('wwwroot/views/'));

    gulp.src('./app/scripts/components/*.html')
        .pipe(gulp.dest('wwwroot/views/'));
});

// Config task
gulp.task('config', function () {
    gulp.src('./app/config/*.*')
        .pipe(gulp.dest('wwwroot/'));
});

gulp.task('watch', ['jshint'], function () {
    // Start live reload
    refresh.listen(livereloadport);

    // Watch our scripts
    gulp.watch(['./app/scripts/**/*.js'], [
      'jshint',
      'browserify'
    ]);

    gulp.watch(['./app/index.html', './app/scripts/components/*.html'], [
      'views'
    ]);

    gulp.watch(['./app/styles/*.less', './app/images/*.*'], [
      'styles'
    ]);

    gulp.watch(['./app/config/*.*'], [
      'config'
    ]);

    gulp.watch('./wwwroot/**').on('change', refresh.changed);
});

// Dev task
gulp.task('dev', ['clean', 'styles', 'views', 'config', 'jshint', 'browserify'], function () { });

gulp.task('default', ['dev', 'watch']);