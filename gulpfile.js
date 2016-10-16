'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const ts = require('gulp-typescript');
const browserSync = require('browser-sync');

// reload browser if there is an update to js, html or css files
gulp.task('browser-sync', function () {
   var files = [
      'dist/*.html',
      'dist/js/*.js',
      'style.css'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './dist'
      }
   });
});

// Process .pug files into html and store files in dist/js/
gulp.task('pug-to-html', () => {
    return gulp.src('./*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
});

// Transpile .ts to .js and store resulting files in dist/js/
gulp.task('typescript', () => {
    return gulp.src('./app/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('dist/js/'));
});

// Watch TypeScript and Pug files for changes
gulp.task('watch', () => {
    gulp.watch('app/*.ts', ['typescript'])
    gulp.watch('*.pug', ['pug-to-html']);
});

// Default task `gulp`
gulp.task('default', ['watch', 'browser-sync']);