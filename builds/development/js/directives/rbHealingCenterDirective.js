
angular.module('app').directive('rbHealingCenter', function($timeout){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/healingCenter.html',
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
      
      scope.isDesktopTwo = function(){
        scope.isLoaded = false;
        scope.device = 'desktop-two';
      };
      
      scope.isTablet = function(){
        scope.isLoaded = false;
        scope.device = 'tablet';
      };
      
      scope.isPhone = function(){
        scope.isLoaded = false;
        scope.device = 'phone';
      };
      
      scope.isAdminOne = function(){
        scope.isLoaded = false;
        scope.device = 'admin-one';
      };
      
      scope.isAdminTwo = function(){
        scope.isLoaded = false;
        scope.device = 'admin-two';
      };
      
      scope.isAdminThree = function(){
        scope.device = 'admin-three';
      };
      
      scope.isAdminFour = function(){
        scope.isLoaded = false;
        scope.device = 'admin-four';
      };
     
    }
  }
});