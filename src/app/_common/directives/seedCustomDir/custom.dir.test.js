describe('Seed Custom Directive', function() {
  var element;
  var $scope;

  beforeEach(module('common.directives'));

  beforeEach(inject(function($compile, $rootScope){
    $scope = $rootScope;
    element = angular.element('<seed-custom-dir></seed-custom-dir>');
    $compile(element)($rootScope);
  }));

  it('should say "Hi, I\'m your angular seed!"', function() {
    expect(element.html()).toBe('<h1>Hi, I\'m your angular seed!</h1>');
  });

});