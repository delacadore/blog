var cp = require('child_process'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    svgstore = require('gulp-svgstore'),
    watch = require('gulp-watch');

gulp.task('default', ['jekyll', 'sass', 'svgstore']);

gulp.task('jekyll', function(done) {
    return cp
        .spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('sass', function () {
    return gulp
        .src('sass/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('svgstore', function () {
    return gulp
        .src('icons/*.svg')
        .pipe(svgstore())
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch(['jekyll/**/*.md', 'jekyll/**/*.html'], ['jekyll']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('icons/*.svg', ['svgstore']);
});
