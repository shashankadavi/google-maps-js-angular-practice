// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");

var DEST='build/';
// task
gulp.task('minify-js', function () {
    gulp.src('bower_components/jquery/dist/jquery.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest(DEST));
});
