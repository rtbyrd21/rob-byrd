

angular.module('app').directive('rbAbout', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/about.html'
  }
});