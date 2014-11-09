var relquire   = require('relquire');

var gulp       = require('gulp');
var taskname   = require('path').basename(__filename, '.js');
var config     = require('./../config')[ taskname ];

var protractor = require('gulp-protractor').protractor;

gulp.task( taskname, ['webdriver:update', 'browserSync:dontopen'], function () {

  return gulp.src( config.src )
    .pipe(protractor({
      configFile: relquire.resolve('~/gulp/confs/protractor.conf'),
    }))
    .on('error', function(e) { throw e });

});


gulp.task( taskname + ':watch', [ taskname ], function () {
  gulp.watch([ config.watch ], [ taskname ]);
});