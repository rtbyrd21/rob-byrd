
angular.module('app').directive('rbIlluminationSite', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/illuminationsite.html',
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