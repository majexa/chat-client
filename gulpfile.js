var gulp = require('gulp');
var exec = require('gulp-exec');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap');

var options = {
  continueOnError: false,
  pipeStdout: true,
  baseFolder: __dirname
};
var reportOptions = {
  err: false,
  stderr: true,
  stdout: true
};

gulp.task('build-form-tmpl', function () {
  gulp.src('models/*.json', {read: false})
    .pipe(exec(
      './form-build <%= file.path %>', options
    ))
    .pipe(exec.reporter(reportOptions))
    .pipe(wrap('Ngn.toObj("Ngn.formTmpl.<%= file.path.replace(/.*\\/(.*)\.json/g, "$1") %>", \'\\<%= contents %>\');', {}, {parse: false}))
    .pipe(rename(function (path) {
      path.extname = '.js'
    }))
    .pipe(gulp.dest('./m/js/formTmpl'))
});