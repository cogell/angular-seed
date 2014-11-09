var gulp     = require('gulp');
var karma    = require('karma').server;
var taskname = require('path').basename(__filename, '.js');

var relquire = require('relquire');

var task = function (watch, browser, cb) {
  var singleRunBool = !watch;

  karma.start({
    configFile: relquire.resolve('~/gulp/confs/karma.conf'),
    singleRun: singleRunBool,
    browsers: [ browser ]
  }, cb);
};

gulp.task( taskname , function (done) {
  task(false, 'Chrome', done);
});

gulp.task( taskname + ':watch' , function (done) {
  task(true, 'Chrome', done);
});

gulp.task( taskname + ':firefox' , function (done) {

  task(false, 'Firefox', done);
});

gulp.task( taskname + ':phantomjs' , function (done) {

  task(false, 'PhantomJS', done);
});