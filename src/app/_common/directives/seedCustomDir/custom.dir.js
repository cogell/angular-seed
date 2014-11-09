angular
.module('common.directives')
.directive('seedCustomDir', function () {
  return {
    restrict: 'E',
    template: '<h1>Hi, I\'m your angular seed!</h1>',
  };
});