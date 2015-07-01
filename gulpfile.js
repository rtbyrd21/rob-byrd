var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    concat = require('gulp-concat'),
    angularFilesort = require('gulp-angular-filesort'),
    strip = require('gulp-strip-line'),
    templateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate');
    nodemon = require('gulp-nodemon');
  

gulp.task('buildTemplateCache', function(){
  return gulp
    .src([
      'builds/development/js/directives/directiveTemplates/*.html'
    ])
    .pipe(templateCache({
      root: 'builds/development/js/directives/',
      module: 'app'
    }))
    .pipe(gulp.dest('builds/development/js/directives/'))
});


gulp.task('buildJavaScript', function() {
  return gulp
    .src([
      'builds/development/ext-modules/**/*.js',
      'builds/development/js/directives/*.js'
    ])
    .pipe(angularFilesort())
    .pipe(strip(['use strict']))
    .pipe(concat('rbFramework.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('builds/development/dist/'))
  ;
});


gulp.task('buildCSS', function() {
  return gulp
    .src([
      'builds/development/css/*.css'
    ])
    .pipe(concat('rbFramework.css'))
    .pipe(gulp.dest('builds/development/dist/'))
  ;
});

gulp.task('js', function() {
  gulp.src('builds/development/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
});

gulp.task('css', function() {
  gulp.src('builds/development/css/*.css')
});

gulp.task('sass', function () {
    gulp.src('builds/development/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('builds/development/css'));
});




gulp.task('watch', function() {
  gulp.watch('builds/development/js/**/*', ['js']);
  gulp.watch('builds/development/css/*.css', ['css']);
  gulp.watch('builds/development/scss/*.scss', ['sass']);
  gulp.watch(['builds/development/*.html',
    'builds/development/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/development/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('nodemon', function(){
  nodemon({
    script: 'server.js',
    ext: 'js',
    env:{
      PORT:8000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function(){
    console.log('restarting');
  });
});

gulp.task('default', ['watch', 'html', 'sass', 'js','css', 'buildTemplateCache', 'buildJavaScript', 'buildCSS', 'webserver']);
