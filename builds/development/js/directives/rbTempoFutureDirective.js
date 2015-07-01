




angular.module('app').directive('rbTempoFuture', function(){
    return{
    scope:{
      image: '@'
    },
    templateUrl: 'js/directives/directiveTemplates/tempo-future.html',
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
      
       scope.isContents = function(){
         scope.isLoaded = false;
        scope.device = 'contents';
      };
      
      scope.isSpread1 = function(){
        scope.isLoaded = false;
        scope.device = 'spread-1';
      };
      
      scope.isSpread2 = function(){
        scope.isLoaded = false;
        scope.device = 'spread-2';
      };
      
      scope.isCoverDetail = function(){
        scope.isLoaded = false;
        scope.device = 'cover-detail';
      };
      
     
      
     
    }
  }
});