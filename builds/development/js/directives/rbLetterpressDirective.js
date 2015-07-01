
angular.module('app').directive('rbLetterpress', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/letterpress.html',
      
    link: function(scope, el, attr, ctrl){
      
      scope.device = 'wedding';
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      
      scope.isWedding = function(){
        scope.isLoaded = false;
        scope.device = 'wedding';
      };
      
      scope.isLighthouse = function(){
        scope.isLoaded = false;
        scope.device = 'lighthouse';
      };
      
      scope.isBirthAnnouncement = function(){
        scope.isLoaded = false;
        scope.device = 'birth-announcement';
      };
      
      scope.isBusinessCard = function(){
        scope.isLoaded = false;
        scope.device = 'business-card';
      };
      
      scope.isRoy = function(){
        scope.device = 'roy';
      };
      
      scope.isHoliday = function(){
        scope.device = 'peace';
      };
     
    }
  }
});