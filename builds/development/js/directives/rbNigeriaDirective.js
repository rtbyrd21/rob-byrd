

angular.module('app').directive('rbNigeria', function(){
    return{
    scope:{
      image: '@',
      mobile: '='
    },
    templateUrl: 'js/directives/directiveTemplates/nigeria.html',
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
      
      scope.isMap = function(){
        scope.isLoaded = false;
        scope.device = 'map';
      };
     console.log(scope.mobile);
    }
  }
});