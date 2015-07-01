


angular.module('app').directive('rbTempoVices', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/tempo-vices.html',
    link: function(scope, el, attr, ctrl){
      scope.device = 'cover';
      
      scope.isLoaded = false;
      
      scope.imageLoad = function(){
              scope.isLoaded = true;
        
      }
      
      scope.isCover = function(){
        scope.isLoaded = false;
        scope.device = 'cover';
      };
      
      scope.isSpread1 = function(){
        scope.isLoaded = false;
        scope.device = 'spread-1';
      };
      
      scope.isSpread2 = function(){
        scope.isLoaded = false;
        scope.device = 'spread-2';
      };
      
      scope.isSpread3 = function(){
        scope.isLoaded = false;
        scope.device = 'spread-3';
      };
      
      scope.isBackCover = function(){
        scope.isLoaded = false;
        scope.device = 'back-cover';
      };
      
     
    }
  }
});