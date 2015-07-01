


angular.module('app').directive('rbEsh', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/esh.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      
      scope.isDesktop = function(){
        scope.isLoaded = false;
        scope.device = 'desktop';
      };
      
      
      scope.isPrintAd = function(){
        scope.isLoaded = false;
        scope.device = 'print-ad';
      };
      
      

     
    }
  }
});