


angular.module('app').directive('rbVisibleLanguage', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/visiblelanguage.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      scope.isDesktop = function(){
//        scope.isLoaded = false;
        scope.device = 'desktop';
      };
      
     
    }
  }
});