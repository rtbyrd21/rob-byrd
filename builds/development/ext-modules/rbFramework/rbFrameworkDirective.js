
angular.module('rbFramework').directive('rbFramework', function(){
  return {
    transclude: true,
    scope: {
      title: '@',
      subtitle: '@',
      iconFile: '@'
    },
    controller: 'rbFrameworkController',
    templateUrl: 'ext-modules/rbFramework/rbFrameworkTemplate.html'
  };
});