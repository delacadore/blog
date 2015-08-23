var browserSync = require('browser-sync'),
    reload = browserSync.reload,
    colors = require('colors'),
    concat = require('gulp-concat'),
    cp = require('child_process'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    minifyHtml = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    stylish = require('jshint-stylish'),
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
                    .pipe(minifyHtml({ conditionals: true }))
                    .pipe(gulp.dest('public'));

                reload();
            }

            // jekyll outputs to console anyway, so no error handling required

            done();
        });
});

gulp.task('jshint', function(done) {
    return gulp
        .src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
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
        .pipe(gulp.dest('public'));
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
        .src([
            'node_modules/svg4everybody/dist/svg4everybody.js',
            'js/*.js'
        ])
        .pipe(concat('blog.js'))
        .pipe(uglify())
        .on('error', function(error) {
            logError(error);
            done();
        })
        .on('end', reload)
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['jekyll', 'jshint', 'sass', 'svgstore', 'uglify']);

gulp.task('serve', ['default'], function() {
    browserSync({ server: 'public' });
    gulp.watch(['jekyll/**/*.md', 'jekyll/**/*.html'], ['jekyll']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('icons/*.svg', ['svgstore']);
    gulp.watch('js/*.js', ['jshint', 'uglify']);
});
