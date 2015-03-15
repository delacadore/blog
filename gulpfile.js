var browserSync = require('browser-sync'),
    reload = browserSync.reload,
    cp = require('child_process'),
    gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),
    uglify = require('gulp-uglify');

gulp.task('jekyll', function(done) {
    return cp
        .spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', function() {
            gulp.src('jekyll/_site/**/*.html')
                .pipe(minifyHtml())
                .pipe(gulp.dest('public'));

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
        .pipe(gulp.dest('public/css'))
        .pipe(reload({ stream: true }));
});

gulp.task('svgstore', function () {
    var stream = gulp
        .src('icons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(gulp.dest('public/svg'));

    stream.on('end', reload);

    return stream;
});

gulp.task('uglify', function () {
    var stream = gulp
        .src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));

    stream.on('end', reload);

    return stream;
});

gulp.task('default', ['jekyll', 'sass', 'svgstore', 'uglify']);

gulp.task('serve', ['default'], function() {
    browserSync({ server: 'public' });
    gulp.watch(['jekyll/**/*.md', 'jekyll/**/*.html'], ['jekyll']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('icons/*.svg', ['svgstore']);
    gulp.watch('js/*.js', ['uglify']);
});
