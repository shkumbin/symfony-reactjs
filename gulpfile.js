var gulp = require('gulp');
var browserify = require('browserify');

gulp.task('build', function () {
    return gulp.src(require('./src/AppBundle/Resources/js/main.js'))
        .transform(require('babelify'))
        .on('error', function (error) {
            console.log(error.stack);
            this.emit('end');
        })
        .pipe(gulp.dest('./dist'));
});