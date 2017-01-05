var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var exec = require('gulp-exec');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap');

var options = {
  continueOnError: false,
  pipeStdout: true,
  baseFolder: __dirname
};
var reportOptions = {
  err: true,
  stderr: true,
  stdout: true
};

gulp.task('build-form-tmpl', function() {
  gulp.src('models/*.json', {read: false})
    .pipe(exec('php ./ngn-env/run/run.php "new CliAccessArgsSingle(\'<%= file.path.replace(/\\\\/g, "/") %>\', new FormBuilderToolCli, [\'runner\' => \'form-build\'])" form-builder-tool', options))
    .pipe(exec.reporter(reportOptions))
    .pipe(wrap('Ngn.toObj("Ngn.formTmpl.<%= file.path.replace(/\\\\/g, "/").replace(/.*\\/(.*)\.json/g, "$1") %>", \'\\<%= contents %>\');', {}, {parse: false}))
    .pipe(rename(function(path) {
      path.extname = '.js'
    }))
    .pipe(gulp.dest('./m/js/formTmpl'))
});

gulp.task('build-cs', function() {
  gulp.src('gulpfile.js', {read: false})
    .pipe(exec('php ./ngn-env/run/run.php "new CliAccessArgsSingle(\'Ngn.Grid,Ngn.Dialog.RequestForm <%= options.baseFolder %>/m main\', new CsBuildTool)" ngn-cs,cs-builder-tool', options))
    .pipe(exec.reporter(reportOptions))
    .pipe(exec('php ./ngn-env/run/run.php "new CliAccessArgsSingle(\'Ngn.Grid <%= options.baseFolder %>/m\', new CssBuildTool)" ngn-cs,cs-builder-tool', options))
    .pipe(exec.reporter(reportOptions))
    .pipe(gulp.dest('./temp'))
});

var useref = require('gulp-useref');

gulp.task('build-index', function() {
  return gulp.src('index.html')
    .pipe(useref({
      'js': 'm/js/bundle.js'
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('dev', function() {
  browserSync.init({
    server: {
      //baseDir: '.',
      index: 'index.html'
    }
  });
  gulp.watch(['m/js/*.js', 'm/js/cache/*.js', 'm/js/chat/*.js', 'm/css/*.css', 'index.html']).on('change', browserSync.reload);
});