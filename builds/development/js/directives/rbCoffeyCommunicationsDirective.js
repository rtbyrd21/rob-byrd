


angular.module('app').directive('rbCoffeyCommunications', function(){
  return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/coffey-communications.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'heart';
      
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      
      scope.isIllustration1 = function(){
        scope.isLoaded = false;
        scope.device = 'heart';
      };
      
       scope.isIllustration2 = function(){
         scope.isLoaded = false;
        scope.device = 'migraine';
      };
      
      scope.isCover1 = function(){
        scope.isLoaded = false;
        scope.device = 'cover-1';
      };
      
      scope.isCover2 = function(){
        scope.isLoaded = false;
        scope.device = 'cover-2';
      };
      
     
    }
  }
});