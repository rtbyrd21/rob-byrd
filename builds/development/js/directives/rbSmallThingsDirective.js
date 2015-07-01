

angular.module('app').directive('rbSmallThings', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/smallthings.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'desktop';
      scope.isLoaded = false;
      
      scope.isDesktop = function(){
        scope.isLoaded = false;
        scope.device = 'desktop';
      };
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      
      scope.isTablet = function(){
        scope.isLoaded = false;
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.isLoaded = false;
        scope.device = 'phone';
      };
      
     
    }
  }
});