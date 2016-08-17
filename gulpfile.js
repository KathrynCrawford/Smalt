var gulp = require('gulp');
var minifycss = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function() {
    return sass('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
		    .pipe(notify({ message: 'Wait for it....wait for it!!!' }));
});

gulp.task('default', function() {
    gulp.watch('scss/**/*.scss',['css']);
});
