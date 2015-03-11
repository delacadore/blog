var browserSync = require('browser-sync'),
    reload = browserSync.reload,
    cp = require('child_process'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore');

gulp.task('default', ['jekyll', 'sass', 'svgstore']);

gulp.task('jekyll', function(done) {
    return cp
        .spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', function() {
            reload();
            done();
        });
});

gulp.task('sass', function () {
    return gulp
        .src('sass/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('public'))
        .pipe(reload({ stream: true }));
});

gulp.task('svgstore', function () {
    var stream = gulp
        .src('icons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(gulp.dest('public'));

    stream.on('end', reload);

    return stream;
});

gulp.task('serve', ['default'], function() {
    browserSync({ server: 'public' });
    gulp.watch(['jekyll/**/*.md', 'jekyll/**/*.html'], ['jekyll']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('icons/*.svg', ['svgstore']);
});
