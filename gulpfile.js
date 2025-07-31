const gulp = require('gulp'); //instalar o Gulp 4.0.2
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); //instalar o imagemin 7.1.0

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, images);
exports.watch =function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}