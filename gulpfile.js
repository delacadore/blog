var browserSync = require('browser-sync'),
    reload = browserSync.reload,
    colors = require('colors'),
    cp = require('child_process'),
    gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),
    uglify = require('gulp-uglify');

// error reporting to console;
var logError = function(error) {
    var message =
        '\n--------------------\n' +
        'Plugin ' + error.plugin + ' failed:' +
        '\nError at ' + error.fileName + ':' + error.lineNumber +
        '\n' + error.message +
        '\n--------------------\n';

    console.error(message.red);
}

gulp.task('jekyll', function(done) {
    return cp
        .spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', function(code) {
            if(code === 0) {
                gulp.src('jekyll/_site/**/*.html')
                    .pipe(minifyHtml())
                    .pipe(gulp.dest('public'));

                reload();
            }

            // jekyll outputs to console anyway, so no error handling required

            done();
        });
});

gulp.task('sass', function(done) {
    return gulp
        .src('sass/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            outputStyle: 'compressed'
        }))
        .on('error', function(error) {
            logError(error);
            done();
        })
        .pipe(reload({ stream: true }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('svgstore', function() {
    return gulp
        .src('icons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .on('error', function(error) {
            logError(error);
            done();
        })
        .on('end', reload)
        .pipe(gulp.dest('public/svg'));
});

gulp.task('uglify', function(done) {
    return gulp
        .src('js/*.js')
        .pipe(uglify())
        .on('error', function(error) {
            logError(error);
            done();
        })
        .on('end', reload)
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['jekyll', 'sass', 'svgstore', 'uglify']);

gulp.task('serve', ['default'], function() {
    browserSync({ server: 'public' });
    gulp.watch(['jekyll/**/*.md', 'jekyll/**/*.html'], ['jekyll']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('icons/*.svg', ['svgstore']);
    gulp.watch('js/*.js', ['uglify']);
});
