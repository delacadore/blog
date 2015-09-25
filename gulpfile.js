var bs = require('browser-sync').create(),
    colors = require('colors'),
    concat = require('gulp-concat'),
    cp = require('child_process'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    minifyHtml = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    stylish = require('jshint-stylish'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),
    webpack = require('webpack');

var webpackOptions = {
    entry: './js/blog.js',
    output: {
        filename: 'public/blog.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};

// build tasks
gulp.task('jekyll', function(done) {
    return cp
        .spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', function(code) {
            if(code === 0) {
                gulp.src('jekyll/_site/**/*.html')
                    .pipe(minifyHtml({ conditionals: true }))
                    .pipe(gulp.dest('public'));

                bs.reload();
            }

            // jekyll outputs to console anyway, so no error handling required

            done();
        });
});

gulp.task('jshint', function(done) {
    return gulp
        .src('js/*.js')
        .pipe(jshint({ esnext: true }))
        .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function(done) {
    return gulp
        .src('sass/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('svgstore', function() {
    return gulp
        .src('icons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .on('end', bs.reload)
        .pipe(gulp.dest('public/svg'));
});

gulp.task('js', function(done) {
    webpack({
        entry: webpackOptions.entry,
        output: webpackOptions.output,
        module: webpackOptions.module,
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                mangle: true,
                screw_ie8: true,
                sourceMap: true
            })
        ]
    }, function(err, stats) {
        done();
    });
});

// watch tasks

gulp.task('js-watch', function() {
    webpack({
        entry: webpackOptions.entry,
        output: webpackOptions.output,
        module: webpackOptions.module,
        watch: true,
        devtool: 'source-map',
    }, function(err, stats) {
        bs.reload();
    });
});

gulp.task('sass-watch', function(done) {
    return gulp
        .src('sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public'))
        .pipe(bs.stream({match: '**/*.css'}));
});

gulp.task('default', ['jekyll', 'js', 'jshint', 'sass', 'svgstore']);

gulp.task('serve', ['jekyll', 'js-watch', 'jshint', 'sass-watch', 'svgstore'], function() {
    bs.init({ server: 'public' });
    gulp.watch(['jekyll/**/*.md', 'jekyll/**/*.html'], ['jekyll']);
    gulp.watch('sass/*.scss', ['sass-watch']);
    gulp.watch('icons/*.svg', ['svgstore']);
    gulp.watch('js/*.js', ['jshint', 'js-watch']);
});
